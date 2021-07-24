import GoogleStrategy from 'passport-google-oauth20'

import conf from '../../config.js'
import { User } from '../models/user.js'

const strategyHandler = async (accessToken, refreshToken, profile = {}, done) => {
  const {
    emails: [{ value: email }] = [],
    name: { familyName, givenName } = {},
    id,
  } = profile

  let user = await User.findOne({ id })

  if (!user) {
    user = await User.findOne({ email })
  }

  if (!user) {
    user = new User({
      birthDay: new Date(),
      firstname: givenName,
      lastname: familyName,
      email,
      id,
    })

    await user.save()
  }

  done(null, user)
}

export default (passport) => {
  const localStrategy = new GoogleStrategy.Strategy({
    clientID: conf.googleId,
    clientSecret: conf.googleSecret,
    callbackURL: `${conf.appUrl}/auth/google/callback`
  }, strategyHandler)

  passport.use(localStrategy)
}
