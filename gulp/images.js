import path from 'path'
import gulp from 'gulp'
import webp from 'gulp-webp'
import imagemin from 'gulp-imagemin'

import { __dirname } from '../config.js'

export const processImages = () => (
  gulp.src(path.resolve(__dirname, 'src/assets/images/*'))
    .pipe(imagemin())
    .pipe(gulp.dest(path.resolve(__dirname, 'public/images')))
)

export const processWebp = () => (
  gulp.src(path.resolve(__dirname, 'src/assets/images/*'))
    .pipe(webp())
    .pipe(gulp.dest(path.resolve(__dirname, 'public/images')))
)
