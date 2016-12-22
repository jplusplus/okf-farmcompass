'use strict';

const path    = require('path');
const fs      = require('fs');
const _       = require('lodash');
const async   = require('async');
const slug    = require('slug');
const gulp    = require('gulp');
const log     = require('gulp-util').log;
const colors  = require('gulp-util').colors;
const Gss     = require('google-spreadsheet');
const conf    = require('../conf/gulp.conf');
const jeditor = require("gulp-json-editor");


const GSSID = '1Pcj2yKJ5qAi4SyMLIYvw4GuxrX97sgtw61ZfG_ihn3k';
const NUMBER_FIELDS = ['slideid']
const UNWANTED_FIELDS = ['_xml', '_links', 'id'];
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
    // Convert year column into numeric values
    for(let k in row) {
      if( /y(\d)+/.test(k) ) {
        row[k.replace('y', '')] = 1 * row[k];
        delete row[k];
      }
    }
    return row;
  });
}


gulp.task('data:all', function(done) {
  log('Loading worksheets info')
  gss.getInfo(function(err, info) {
    async.eachSeries(info.worksheets, function(worksheet, next){
      log('Saving', colors.yellow(worksheet.title));
      gss.getRows(1 + info.worksheets.indexOf(worksheet), function(err, rows){
        var data = prepareRows(rows);
        var json = JSON.stringify(data, null, 2);
        var filename = slug(worksheet.title) + ".json";
        // And override the existinng JSON file
        fs.writeFile(path.join(conf.paths.data, filename), json, next);
      });
    }, done)
  });
});

gulp.task('data:meta', function() {
  return gulp.src(path.join(conf.paths.data, 'meta.json'))
    .pipe(jeditor(function(meta) {
      return meta.map(step =>{
        if(step.sheettitle !== null) {
          step.slug = slug(step.sheettitle);
          step.data = require( path.join('../', conf.paths.data, step.slug + '.json') );
          // Transform some step's values according to their name
          Object.keys(step).forEach( (key)=> {
            if( key.indexOf('highlights') === 0) {
              step[key] = _.compact( (step[key] || '').split(',').map(_.trim) );
            }
          });
        }
        return step;
      });
    }))
    .pipe(gulp.dest(conf.paths.data));
});
