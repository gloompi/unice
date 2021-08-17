import express from "express";
import ensureAuth from "./helpers/ensureAuthenticated.js";
import {
  login,
  logout,
  showLogin,
} from "./controllers/auth/login.controller.js";
import {
  register,
  showRegistration,
} from "./controllers/auth/registration.controller.js";
import {
  googleLogin,
  googleCallback,
} from "./controllers/auth/google.controller.js";
import {
  facebookLogin,
  facebookCallback,
} from "./controllers/auth/facebook.controller.js";
import { showProfile } from "./controllers/pages/profile.controller.js";
import { showHome } from "./controllers/pages/home.controller.js";
import { showProduct } from "./controllers/pages/product.controller.js";

const router = express.Router();

router.get("/404", (req, res) => res.render("not-found"));

router.get("/", showHome);
router.get("/profile", ensureAuth, showProfile);
router.get("/product/:id", showProduct);
router.get("/auth/login", showLogin);
router.get("/auth/register", showRegistration);
router.get("/auth/logout", logout);
router.get("/auth/google", googleLogin);
router.get("/auth/google/callback", googleCallback);
router.get("/auth/facebook", facebookLogin);
router.get("/auth/facebook/callback", facebookCallback);
router.post("/auth/login", login);
router.post("/auth/register", register);

export default router;
