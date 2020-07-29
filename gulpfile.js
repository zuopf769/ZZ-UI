const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const cssmin = require('gulp-cssmin')
const output = './lib/'

gulp.task('compile:theme-chalk', async () => {
  await gulp
    .src('./components/theme-chalk/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss())
    .pipe(cssmin())
    .pipe(gulp.dest(`${output}/theme-chalk`))
})

gulp.task('copyfont:theme-chalk', async () => {
  await gulp
    .src('./components/theme-chalk/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest(`${output}/theme-chalk/fonts`))
})

gulp.task('preview:theme-chalk', async () => {
  await gulp
    .src('./components/theme-chalk/index.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(`${output}/theme-chalk`))
})

gulp.task('compile:theme2', async () => {
  await gulp
    .src('./components/theme2/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss())
    .pipe(cssmin())
    .pipe(gulp.dest(`${output}/theme2`))
})

gulp.task('copyfont:theme2', async () => {
  await gulp
    .src('./components/theme2/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest(`${output}/theme2/fonts`))
})

gulp.task('preview:theme2', async () => {
  await gulp
    .src('./components/theme2/index.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(`${output}/theme2`))
})

gulp.task('build:theme-chalk', gulp.parallel('compile:theme-chalk', 'copyfont:theme-chalk'))
gulp.task('build:theme2', gulp.parallel('compile:theme-chalk', 'copyfont:theme-chalk'))

gulp.task('build', gulp.parallel('build:theme-chalk', 'build:theme2'))
