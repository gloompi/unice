export const showProfile = (req, res) => {
  res.render("profile", {
    name: req.user.name,
  });
};
