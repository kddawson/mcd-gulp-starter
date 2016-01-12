# mcd starter project using Gulp build tool


## CSS
* Uses Sass.
* Autoprefixer is in operation - just write CSS properties according to the W3C spec. Amend the supported browser list in the Gulp task.
* See: https://github.com/multicelldesign/mcd-snippets-scss for files.

## Gulp
* Assumes you have Node already installed.
* Assumes you're familiar with the command line.
* Assumes you know how this all works.

### If Gulp is not already installed, run the following commands
1. $ `npm install -g gulp`
2. $ `npm install gulp-load-plugins`
3. $ `npm install -g npm-check-updates`

### Install local per project
1. $ `npm install --save-dev` (installs all packages in package.json)
2. $ `ncu -u` (overwrites package.json with latest versions - see: https://github.com/tjunnone/npm-check-updates)

### Run process
* $ `gulp`

## Bower
* Twitter Bootstrap is an obvious out-of-the-starter-theme choice here for a Bower install.
* Once installed, run the bootstrap task to copy the _variables.scss & _bootstrap.scss files to src/scss/third-party for configuration.

## Sassdoc
* Because documentation. See: http://sassdoc.com
