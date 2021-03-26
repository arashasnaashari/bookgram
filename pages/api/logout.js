import withSession from "../../utils/session";

export default withSession(async (req, res) => {
  await req.session.destroy();
  res.json({ isLoggedIn: false });
});
