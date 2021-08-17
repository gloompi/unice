import gulp from "gulp";

import { processImages, processWebp } from "./gulp/images.js";
import { processFonts } from "./gulp/fonts.js";
import { buildStyles } from "./gulp/styles.js";
import { buildScripts } from "./gulp/scripts.js";
import { buildVendors } from "./gulp/vendors.js";

export default () => {
  gulp.watch(
    "./src/assets/images/*",
    { ignoreInitial: false },
    gulp.parallel(processImages, processWebp)
  );
  gulp.watch("./src/assets/fonts/*", { ignoreInitial: false }, processFonts);
  gulp.watch("./src/**/*.scss", { ignoreInitial: false }, buildStyles);
  gulp.watch("./src/**/*.js", { ignoreInitial: false }, buildScripts);
  gulp.watch("./vendors/**/*", { ignoreInitial: false }, buildVendors);
};
