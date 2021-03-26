import withSession from "../../utils/session";

export default withSession(async (req, res) => {
  // await req.session.destroy();
  req.session.set("user", {
    isLoggedIn: false,
  });
  await req.session.save();
  res.json({ isLoggedIn: false });
});
