# mcd starter project using Gulp build tool


## CSS
* Uses Sass.
* Autoprefixer is in operation - just write CSS properties according to the W3C spec. Amend the supported browser list in the Gulp task.
* See: https://github.com/multicelldesign/mcd-snippets-scss for files.

### Install local per project
1. $ `npm install --save-dev` (installs all packages in package.json)
2. $ `npm outdated` (check for updates - only by project creator)
3. $ `npm update` (update packages - only by project creator)

## Gulp
* Assumes you have Node already installed.
* Assumes you're familiar with the command line.
* Assumes you know how this all works.

### Run process
* $ `gulp`

## Bower
* Bootstrap is an obvious out-of-the-starter-theme choice here for a Bower install.
* Once installed, run the bootstrap task to copy the _variables.scss & _bootstrap.scss files to src/scss/third-party for configuration.

## Sassdoc
* Because documentation. See: http://sassdoc.com
