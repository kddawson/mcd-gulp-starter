# mcd starter project using Gulp build tool


## CSS
* Uses LESS CSS, but easy enough to change to SCSS.
* Autoprefixer is in operation - just write CSS properties according to the W3C spec. Amend the supported browser list in the Gulp task.
* The Less is organised to build colour-themed CSS - it's just an experiment.
* There's just enough Less/JS to confirm the build works.

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
2. $ `npm-check-updates -u` (overwrites package.json with latest versions - see: https://github.com/tjunnone/npm-check-updates)

### Run process
* $ `gulp`

## Bower
* Twitter Bootstrap is an obvious out-of-the-starter-theme choice here for a Bower install but you'll be wanting the raw LESS/SCSS and JS files so you can build only what you need. To that end, copy out bootstrap.less and variables.less to your src/less/third-party folder so `$bower update` doesn't override your customisations.
* This starter project uses https://github.com/jozefizso/bower-bootstrap-less.
* or just link to the CDN files, override styles where required and have done with it.
