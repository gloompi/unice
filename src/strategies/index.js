import localStrategy from './local.js'
import googleStrategy from './google.js'
import { User } from '../models/user.js'

export default (passport) => {
  localStrategy(passport)
  googleStrategy(passport)

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })
}
