import ensureAuth from '../helpers/ensureAuthenticated.js'

export default (router) => {
  router.get('/profile', ensureAuth, (req, res) => {
    res.render('profile', {
      name: req.user.name,
    })
  })
}
