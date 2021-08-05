import path from 'path'
import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css'
import sassInstance from 'sass'

import { __dirname } from '../config.js'

const sass = gulpSass(sassInstance)

export const buildStyles = () => (
  gulp.src(path.resolve(__dirname, 'src/*.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest(path.resolve(__dirname, 'public')))
)
