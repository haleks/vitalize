// Elixir
var elixir = require('laravel-elixir');

// Extensions
require('laravel-elixir-mocha');

// Plugins & configuration
var $ = elixir.Plugins;
var config = elixir.config;

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    // Add trailing .min when minimizing for production
    mix.sass('./scss/vitalize.scss', $.if(config.production, './dist/css/vitalize.min.css', './dist/css/vitalize.css'));
});


// Run test only when not in production
if(! config.production) {
    elixir(function(mix) {
        mix.sass('./tests/tests.scss', './tests/results.css', { includePaths: ['scss', 'tests', 'node_modules/sass-true/sass'] })
           .mocha('./tests/tests.js');
    });
}
