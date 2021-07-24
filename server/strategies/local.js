import bcrypt from 'bcrypt'
import LocalStrategy from 'passport-local'
import { User } from '../models/user.js'

const strategyHandler = (email, password, done) => {
  User.findOne({ email }, async (err, user) => {
    if (err) return done(err)
    if (!user) return done(null, false, { message: 'Incorrect email.' })
    if (!user.encryptedPassword) return done(null, false, { message: 'Please set the password first' })

    const match = await bcrypt.compare(password, user.encryptedPassword)

    if (match) return done(null, user)

    return done(null, false, { message: 'Incorrect password.' })
  })
}

export default (passport) => {
  const localStrategy = new LocalStrategy.Strategy({ usernameField: 'email', passwordField:'password' }, strategyHandler)

  passport.use(localStrategy)
}
