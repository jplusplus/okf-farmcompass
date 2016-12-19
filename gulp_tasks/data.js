'use strict';

const path  = require('path');
const fs    = require('fs');
const _     = require('lodash');
const async = require('async');
const slug  = require('slug');
const gulp  = require('gulp');
const log   = require('gulp-util').log;
const colors= require('gulp-util').colors;
const Gss   = require('google-spreadsheet');
const conf  = require('../conf/gulp.conf');

const GSSID = '1Pcj2yKJ5qAi4SyMLIYvw4GuxrX97sgtw61ZfG_ihn3k';
const NUMBER_FIELDS = ['slideid']
const UNWANTED_FIELDS = ['_xml', '_links'];
const BOOL_FIELDS = [];

let gss = new Gss(GSSID);

var prepareRows = function(rows) {
  return _.map(rows, function(row) {
    var exists = k => typeof(row[k]) !== 'undefined'
    // Remove unwanted properties
    for(let k of UNWANTED_FIELDS) {
      if(exists(k)) delete row[k];
    }
    // Convert values to boolean
    for(let k of BOOL_FIELDS) {
      if(exists(k)) {
        if(row[k] === '') {
          row[k] = null
        } else  {
          row[k] = (row[k] || '').toLowerCase()[0] === 't';
        }
      }
    }
    // Convert values to number
    for(let k of NUMBER_FIELDS) {
      if(exists(k)) row[k] = 1 * row[k];
    }
    // Convert to null when empty
    for(let k in row) {
      if( row[k] === '' ) row[k] = null;
    }
    return row;
  });
}


gulp.task('data:all', function(done) {
  log('Loading worksheets info')
  gss.getInfo(function(err, info) {
    async.eachSeries(info.worksheets, function(worksheet, next){
      log('Saving', colors.yellow(worksheet.title));
      gss.getRows(info.worksheets.indexOf(worksheet), function(err, rows){
        var data = prepareRows(rows);
        var json = JSON.stringify(data, null, 2);
        var filename = slug(worksheet.title) + ".json";
        // And override the existinng JSON file
        fs.writeFile(path.join(conf.paths.data, filename), json, next);
      });
    }, done)
  });
});

gulp.task('data', gulp.series('data:all'));
