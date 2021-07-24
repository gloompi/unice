import gulp from 'gulp'

import { processImages } from './gulp/images.js'
import { buildStyles } from './gulp/styles.js'
import { buildScripts } from './gulp/scripts.js'

export default () => {
  gulp.watch('./src/images/*.+(png|jpg|gif)', { ignoreInitial: false }, processImages)
  gulp.watch('./src/**/*.scss', { ignoreInitial: false }, buildStyles)
  gulp.watch('./src/**/*.js', { ignoreInitial: false }, buildScripts)
}
