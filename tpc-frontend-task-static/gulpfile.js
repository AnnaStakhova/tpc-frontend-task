var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    pkg = require('./package.json'),
    minifyCSS = require('gulp-minify-css'),
    watch = require('gulp-watch');

gulp.task('scripts', function() {
    gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap-css/js/bootstrap.js',
        'src/*.js'
    ])
    .pipe(concat('tpc.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/js/'))
});

gulp.task('styles', function() {
    gulp.src([
        'bower_components/bootstrap-css/css/bootstrap.css',
        'bower_components/bootstrap-css/css/bootstrap-theme.css',
        'assets/css/*.css',
    ])
    .pipe(concat('tpc.css'))
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/css/'))
});

gulp.task('glyphs', function() {
    return gulp.src([
      'bower_components/bootstrap-css/fonts/*'
    ])
    .pipe(gulp.dest('./public/fonts'));
});

gulp.task('html', function() {
    return gulp.src([
      'assets/html/*.html'
    ])
    .pipe(gulp.dest('./public'));
});

gulp.task('images', function() {
    return gulp.src([
      'assets/img/*'
    ])
    .pipe(gulp.dest('./public/img'));
});

gulp.task('watcher', function() {
    gulp.src('src/*.js')
        .pipe(watch('src/*.js', function(event) {
            gulp.run('scripts');
        }));
    gulp.src('assets/css/*.css')
        .pipe(watch('assets/css/*.css', function(event) {
            gulp.run('styles');
        }));
    gulp.src('assets/html/*.html')
        .pipe(watch('assets/html/*.html', function(event) {
            gulp.run('html');
        }));
    gulp.src('assets/img/*')
        .pipe(watch('assets/img/*', function(event) {
            gulp.run('images');
        }));
});

gulp.task('default', ['scripts', 'styles', 'glyphs', 'html', 'images']);
gulp.task('watch', ['watcher']);
