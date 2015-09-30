var path = require('path');
var sassTrue = require('sass-true');

sassTrue.runSass({
    file: path.join(__dirname, 'tests.scss'),
    includePaths: ['scss', 'tests', 'bower_components/true/sass'],
}, describe, it);
