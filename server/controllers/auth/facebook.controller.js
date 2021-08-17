import passport from "passport";

export const facebookLogin = passport.authenticate("facebook", {
  authType: "reauthenticate",
});

export const facebookCallback = passport.authenticate("facebook", {
  successRedirect: "/profile",
  failureRedirect: "/auth/login",
  failureFlash: true,
});
