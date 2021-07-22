import passport from 'passport'
import bcrypt from 'bcrypt'

import { User } from '../../models/user.js'

export default (router) => {
  router.get('/auth/login', (_, res) => {
    res.render('login')
  })

  router.get('/auth/register', (_, res) => {
    res.render('register')
  })

  router.post('/auth/register', async (req, res) => {
    const { firstname, lastname, email, password, confirmPassword } = req.body

    const errors = []

    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      errors.push({ msg: 'Please fill in all fields' })
    }

    if (password.length < 6) {
      errors.push({ msg: 'Password should be at least 6 characters' })
    }

    if (password !== confirmPassword) {
      errors.push({ msg: 'Passwords do not match' })
    }

    if (errors.length > 0) {
      res.render('register', {
        errors,
        firstname,
        lastname,
        email,
        password,
        confirmPassword,
      })
    } else {
      const user = await User.findOne({ email })
      if (user) {
        errors.push({ msg: 'Email already exists' })

        res.render('register', {
          errors,
          firstname,
          lastname,
          email,
          password,
          confirmPassword,
        })
      } else {
        const newUser = new User({
          encryptedPassword: await bcrypt.hash(password, 10),
          birthDay: new Date(),
          firstname,
          lastname,
          email,
        })

        await newUser.save()

        req.flash('success_msg', 'You are now registered and can login!')
        res.redirect('/auth/login')
      }
    }
  })

  router.post('/auth/login', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/profile',
      failureRedirect: '/auth/login',
      failureFlash: true
    })(req, res, next)
  })

  router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success_msg', 'You are logged out')
    res.redirect('/auth/login')
  })
}
