import passport from 'passport'

export const showLogin = (_, res) => {
  res.render('login', {
    stylePath: '/auth.css',
  })
}

export const login = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/auth/login',
    failureFlash: true
  })(req, res, next)
}

export const logout = (req, res) => {
  req.logout()
  req.flash('success_msg', 'You are logged out')
  res.redirect('/auth/login')
}
