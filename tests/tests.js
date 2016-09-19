let path = require('path');
let sassTrue = require('sass-true');

sassTrue.runSass({
    file: path.join(__dirname, 'tests.scss'),
    includePaths: ['scss', 'tests', 'node_modules/sass-true/sass'],
}, describe, it);
