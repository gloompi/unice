import bcrypt from "bcrypt";

import { User } from "../../models/user.js";

const rendeRegister = (res, props) =>
  res.render("register", { ...props, stylePath: "/auth.css" });

export const showRegistration = (_, res) => {
  rendeRegister(res);
};

export const register = async (req, res) => {
  const { firstname, lastname, email, password, confirmPassword } = req.body;

  const errors = [];

  if (!firstname || !lastname || !email || !password || !confirmPassword) {
    errors.push({ msg: "Please fill in all fields" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password should be at least 6 characters" });
  }

  if (password !== confirmPassword) {
    errors.push({ msg: "Passwords do not match" });
  }

  if (errors.length > 0) {
    rendeRegister(res, {
      errors,
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
    });
  } else {
    const user = await User.findOne({ email });

    if (user) {
      errors.push({ msg: "Email already exists" });

      rendeRegister(res, {
        errors,
        firstname,
        lastname,
        email,
        password,
        confirmPassword,
      });
    } else {
      const newUser = new User({
        encryptedPassword: await bcrypt.hash(password, 10),
        birthDay: new Date(),
        firstname,
        lastname,
        email,
      });

      await newUser.save();

      req.flash("success_msg", "You are now registered and can login!");
      res.redirect("/auth/login");
    }
  }
};
