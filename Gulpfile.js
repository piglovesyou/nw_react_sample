'use strict';
const gulp = require('gulp');
const autoprefix = require('gulp-autoprefixer');
const Path = require('path');
const sass = require('gulp-sass');

const config = {
  sassDir: './src/sass',
  bowerPath: './bower_components',
  deployPath: './public'
};

gulp.task('default', ['static', 'sass']);
gulp.task('watch', ['static', 'sass:watch']);

gulp.task('sass', () => {
  gulp.src(Path.join(config.sassDir, '**/*.sass'))
  .pipe(sass({ includePaths: [config.bowerPath] })
  .on('error', sass.logError))
  .pipe(autoprefix('last 2 version'))
  .pipe(gulp.dest(Path.join(config.deployPath, 'css')));
});

gulp.task('sass:watch', () => {
  gulp.watch(Path.join(config.sassDir, '**/*.sass'), ['sass']);
});

gulp.task('static', () => {
  return gulp.src([ config.bowerPath + '/fontawesome/fonts/**.*' ])
  .pipe(gulp.dest(Path.join(config.deployPath, 'css/fonts')));
});
