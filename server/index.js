import express from "express";
import compression from "compression";
import mongoose from "mongoose";
import passport from "passport";
import path from "path";
import flash from "connect-flash";
import session from "express-session";
import bodyParser from "body-parser";
import expressLayouts from "express-ejs-layouts";

import conf, { __dirname } from "../config.js";
import router from "./routes.js";
import strategies from "./strategies/index.js";
import { adminBro, router as adminRouter } from "./admin/index.js";

const app = express();

const run = async () => {
  await mongoose.connect(conf.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // EJS
  app.use(expressLayouts);
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "/server/views"));
  // admin
  app.use(adminBro.options.rootPath, adminRouter);
  // statics
  app.use(express.static("public"));
  app.use("/uploads", express.static("uploads"));
  // session
  app.use(
    session({
      secret: conf.secret,
      resave: true,
      saveUninitialized: true,
    })
  );
  // passport
  app.use(passport.initialize());
  app.use(passport.session());
  // flash
  app.use(flash());
  // parsers
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.json());
  // compression
  app.use(compression());
  // global vars
  app.use((req, res, next) => {
    console.log("----REQ----", req.method, req.url);
    res.locals.isAuth = req.isAuthenticated();
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    next();
  });
  // routes
  app.use(router);

  // Handle 404 - Keep this as a last route
  app.use((_, res) => {
    res.status(404);
    res.render("not-found");
  });

  strategies(passport);

  app.listen(conf.port, () =>
    console.log(`Running app on localhost:${conf.port}`)
  );
};

run();
