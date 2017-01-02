angular
  .module('app')
  .config(translateConfig);

/** @ngInject */
function translateConfig($translateProvider, tmhDynamicLocaleProvider) {
  'ngInject';
  // Load current locale
  tmhDynamicLocaleProvider.localeLocationPattern('//code.angularjs.org/1.2.20/i18n/angular-locale_{{locale}}.js');
  // Configure Angular Translate
  $translateProvider
    .useStaticFilesLoader({
      prefix: 'locales/',
      suffix: '.json'
    })
    .registerAvailableLanguageKeys(['en_BE', 'fr_FR'], {
      '*': 'en_BE',
      'fr': 'fr_FR',
      'fr_FR': 'fr_FR',
      'fr-FR': 'fr_FR',
      'fr-BE': 'fr_FR',
      'fr-BE': 'fr_FR',
      'fr-CA': 'fr_FR',
      'fr-CA': 'fr_FR'
    })
    .determinePreferredLanguage()
    .fallbackLanguage('en_BE')
    .useLocalStorage()
    .useSanitizeValueStrategy(null);
}
