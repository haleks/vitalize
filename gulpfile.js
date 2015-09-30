// Elixir
var elixir = require('laravel-elixir');

// Extensions
require('laravel-elixir-mocha');

// Plugins & Config
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
    mix.sass('./scss/vitalize.scss', $.if(config.production, './dist/css/vitalize.min.css', './dist/css/vitalize.css'))
});


// Test only when not production
if(config.production == false) {
    elixir(function(mix) {
        mix.sass('./tests/tests.scss', './tests/results.css', { includePaths: ['scss', 'tests', 'bower_components/true/sass'] })
           .mocha('./tests/tests.js')
    });
}
