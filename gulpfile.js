var gulp = require('gulp');
var browserSync = require('browser-sync');

var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var eslint = require('gulp-eslint');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');

var bs = browserSync.create();
