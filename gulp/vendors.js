import path from "path";
import gulp from "gulp";

import { __dirname } from "../config.js";

export const buildVendors = () =>
  gulp
    .src(path.resolve(__dirname, "vendors/**/*"))
    .pipe(gulp.dest(path.resolve(__dirname, "public/vendors")));
