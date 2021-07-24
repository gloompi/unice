import localStrategy from './local.js'
import googleStrategy from './google.js'
import facebookStrategy from './facebook.js'
import { User } from '../models/user.js'

export default (passport) => {
  localStrategy(passport)
  googleStrategy(passport)
  facebookStrategy(passport)

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })
}
