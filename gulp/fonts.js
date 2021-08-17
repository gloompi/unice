import path from "path";
import gulp from "gulp";

import { __dirname } from "../config.js";

export const processFonts = () =>
  gulp
    .src(path.resolve(__dirname, "src/assets/fonts/*"))
    .pipe(gulp.dest(path.resolve(__dirname, "public/fonts")));
