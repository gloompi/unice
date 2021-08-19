import path from "path";
import gulp from "gulp";
import terser from "gulp-terser";

import { __dirname } from "../config.js";

export const buildScripts = () =>
  gulp
    .src(path.resolve(__dirname, "src/*.js"))
    .pipe(terser())
    .pipe(gulp.dest(path.resolve(__dirname, "public")));
