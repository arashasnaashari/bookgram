import User from "../../model/User";
import dbConnect from "../../utils/dbConnect";
import bcrypt from "bcrypt";
export default async function handler(req, res) {
  await dbConnect();

  try {
    const existingUser = await User.findOne({
      phone: req.body.phone,
    });
    if (existingUser) {
      res.status(200).json({ msg: "phone", sign: false });
      return;
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      phone: req.body.phone,
      username: req.body.username,
      password: hashedPassword,
    });
    const result = await user.save();
    res.status(200).json({ msg: result._id, sign: true });
  } catch (error) {
    res.status(400).json({ msg: error, sign: false });
  }
}
