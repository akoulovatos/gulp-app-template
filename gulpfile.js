const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify')
// const concat = require('gulp-concat');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

// compile scss 
function style() {
  return gulp.src('./app/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/source/css'))
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/dist/css/'))
    .pipe(browserSync.stream());
}

// compile js 
function jsCompress() {
  return gulp.src('./app/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./app/dist/js/'))
}

// compile pug 
function html() {
  return gulp.src('./app/views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./app'));
}

// file watch 
function watch() {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  });
  gulp.watch('./app/sass/**/**/*.scss', style);
  gulp.watch('./app/js/*.js', jsCompress);
  gulp.watch('./app/views/*.pug', html);
  gulp.watch('./app/*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.cleanCSS = cleanCSS;
exports.watch = watch;





