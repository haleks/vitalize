// Elixir
const elixir = require('laravel-elixir');

// Extensions
require('laravel-elixir-mocha');

// Plugins & configuration
var $ = elixir.Plugins;
var isProduction = elixir.config.production || false;

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
  // Add trailing .min when minimizing for production
  mix.sass('./scss/vitalize.scss', $.if(isProduction, './dist/css/vitalize.min.css', './dist/css/vitalize.css'));

  // Run test only when not in production
  if (! isProduction) {
    mix.sass('./tests/tests.scss', './tests/results/results.css', null, { includePaths: ['scss', 'tests', 'node_modules/sass-true/sass'] })
       .mocha('./tests/tests.js');
  }
});