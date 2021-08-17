import path from "path";
import gulp from "gulp";
import uglify from "gulp-uglify";

import { __dirname } from "../config.js";

export const buildScripts = () =>
  gulp
    .src(path.resolve(__dirname, "src/*.js"))
    .pipe(uglify())
    .pipe(gulp.dest(path.resolve(__dirname, "public")));
