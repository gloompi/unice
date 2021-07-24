import passport from 'passport'

export const googleLogin = passport.authenticate('google', { scope: ['profile', 'email'] })

export const googleCallback = (
  passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/auth/login',
    failureFlash: true
  })
)
