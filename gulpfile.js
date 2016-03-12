var gulp = require('gulp');
var browserSync = require('browser-sync');

var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var eslint = require('gulp-eslint');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');

var bs = browserSync.create();

gulp.task('styles', function () {
  return gulp.src(['app/styles/normalize.css', 'app/styles/main.css'])
    .pipe(concat('all.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/styles'))
    .pipe(bs.stream());
});

gulp.task('lint', function () {
  return gulp.src(['app/scripts/*.js', '!app/scripts/jquery.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('scripts', function () {
  return gulp.src(['app/scripts/jquery.js', 'app/scripts/main.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(bs.stream({once: true}));
});

gulp.task('images', function () {
  return gulp.src('app/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('copy', function () {
  return gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['styles', 'scripts'], function () {
  bs.init({
    logPrefix: 'ROBOT',
    server: ['.tmp', 'app']
  });

  gulp.watch(['app/*.html'], bs.reload);
  gulp.watch(['app/styles/*.css'], ['styles']);
  gulp.watch(['app/scripts/*.js'], ['scripts']);
});


gulp.task('default', function () {
  console.log('hello world!');
});

gulp.task('build', ['styles', 'scripts', 'images', 'copy']);
