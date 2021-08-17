import FacebookStrategy from "passport-facebook";

import conf from "../../config.js";
import { User } from "../models/user.js";

const strategyHandler = async (
  accessToken,
  refreshToken,
  profile = {},
  done
) => {
  const {
    emails: [{ value: email = "" } = {}] = [],
    name: { familyName, givenName } = {},
    id,
  } = profile;

  let user = await User.findOne({ id });

  if (!user && email !== "") {
    user = await User.findOne({ email });
  }

  if (!user) {
    user = new User({
      birthDay: new Date(),
      firstname: givenName,
      lastname: familyName,
      email,
      id,
    });

    await user.save();
  }

  done(null, user);
};

export default (passport) => {
  const localStrategy = new FacebookStrategy.Strategy(
    {
      clientID: conf.facebookId,
      clientSecret: conf.facebookSecret,
      callbackURL: `${conf.appUrl}/auth/facebook/callback`,
      profileFields: ["first_name", "last_name", "email", "birthday"],
    },
    strategyHandler
  );

  passport.use(localStrategy);
};
