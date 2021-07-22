import passport from 'passport'

export default (router) => {
  router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

  router.get('/auth/google/callback', (req, res, next) => {
    passport.authenticate('google', {
      successRedirect: '/profile',
      failureRedirect: '/auth/login',
      failureFlash: true
    })(req, res, next)
  })
}
