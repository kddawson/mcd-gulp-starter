// Include Gulp
var gulp = require('gulp');

// Include gulp- plugins from package.json
var plugins = require('gulp-load-plugins')();


var del         = require('del'),
    q           = require('q'),
    path        = require('path'),
    fs          = require('fs'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;


var dest        = "./dist";
var src         = './src';


// Compile & Minify CSS from LESS files
// =============================================================================
gulp.task('css', function () {

    var onError = function (err) {
        plugins.notify.onError({
            title: "Gulp",
            subtitle: "Failure!",
            message: "Error: <%= error.message %>",
            sound: "Beep"
        })(err);

        this.emit('end');
    };

    return gulp.src(src + '/less/theme/*.less')

    .pipe(plugins.plumber({ errorHandler: onError }))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less({compress: true}))
    .pipe(plugins.autoprefixer({
        browsers: [
            'ie 8',
            'ie 9',
            'Firefox >= 33',
            'Chrome >= 18',     // Because not so awesome Awesomium
            'Android >= 2.1'
        ]
    }))
    .pipe(plugins.minifyCss({ keepBreaks: false }))
    .pipe(plugins.rename({ suffix: '.min' }))
    .pipe(plugins.sourcemaps.write('maps'))
    .pipe(gulp.dest(dest + '/css'))
    .pipe(plugins.notify({ message: 'CSS task complete' }));
});


// Concatenate & Minify JS
// =============================================================================
gulp.task('js', function () {
    return gulp.src(src + '/js/*.js')
    .pipe(plugins.concat('app.js'))
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(dest + '/js'))
    .pipe(plugins.notify({ message: 'JS task complete' }));
});


// Concatenate & Minify Bootstrap JS
// bootstrap-popover.js has to be after bootstrap-tooltip.js
// Only use what's needed
// =============================================================================
gulp.task('bootstrapJS', function () {
    return gulp.src([
        'bower_components/bootstrap-less/js/transition.js',
        'bower_components/bootstrap-less/js/alert.js',
        'bower_components/bootstrap-less/js/button.js',
        'bower_components/bootstrap-less/js/carousel.js',
        'bower_components/bootstrap-less/js/collapse.js',
        'bower_components/bootstrap-less/js/dropdown.js',
        'bower_components/bootstrap-less/js/modal.js',
        'bower_components/bootstrap-less/js/tooltip.js',
        'bower_components/bootstrap-less/js/popover.js',
        'bower_components/bootstrap-less/js/scrollspy.js',
        'bower_components/bootstrap-less/js/tab.js',
        'bower_components/bootstrap-less/js/affix.js'
    ])
    .pipe(plugins.concat('bootstrap.js'))
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(dest + '/js'))
    .pipe(plugins.notify({ message: 'Bootstrap JS task complete' }));
});


// SVG tasks
// =============================================================================
gulp.task('svg', function() {
    return gulp.src(src + '/svg/*.svg')
        .pipe(plugins.svgmin())
        .pipe(gulp.dest(dest + '/icons'))
        .pipe(plugins.notify({ message: 'svg task complete' }));
});


gulp.task('svg2png', ['svg'], function() {
    return gulp.src(src + '/svg/*.svg')
        .pipe(plugins.svg2png())
        .pipe(gulp.dest(dest + '/icons'))
        .pipe(plugins.notify({ message: 'svg2png task complete' }));
});


// Optimise images (once)
// =============================================================================
gulp.task('images', function() {
    return gulp.src(src +'/img/**/*.*')
    .pipe(plugins.cache(plugins.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest(dest + '/img'))
    .pipe(plugins.notify({ message: 'Images task complete' }));
});


// Update the browser automagically
// =============================================================================
gulp.task('serve', ['watch'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('*.html').on('change', reload);
});

// Watch for changes in files
gulp.task('watch', function () {
    gulp.watch(src + '/less/**/*.less', ['css']);
    gulp.watch(src + '/js/*.js', ['js']);
    gulp.watch(src + '/svg/*.svg', ['svg2png']);
});


// Clean
// =============================================================================
gulp.task('clean', function(cb) {
    del(['dist'], cb);
});


// Default Task
// =============================================================================
gulp.task('default', ['clean'], function() {
    gulp.start('css', 'js', 'images', 'svg2png', 'serve');
});
