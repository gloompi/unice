import GoogleStrategy from 'passport-google-oauth20'

import conf from '../../config.js'
import { User } from '../models/user.js'

const strategyHandler = async (accessToken, refreshToken, profile = {}, cb) => {
  const { emails: [{ value: email }] = [] } = profile
  let user = await User.findOne({ email })

  if (!user) {
    const { name: { familyName, givenName } = {} } = profile
    user = new User({
      birthDay: new Date(),
      firstname: givenName,
      lastname: familyName,
      email,
    })

    await user.save()
  }

  cb(null, user)
}

export default (passport) => {
  const localStrategy = new GoogleStrategy.Strategy({
    clientID: conf.googleId,
    clientSecret: conf.googleSecret,
    callbackURL: `${conf.appUrl}/auth/google/callback`
  }, strategyHandler)

  passport.use(localStrategy)
}
