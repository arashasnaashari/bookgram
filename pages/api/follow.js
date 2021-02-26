import User from "../../model/User";
import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  try {
    // const followd = await User.findByIdAndUpdate(req.body.followed, {
    //   $push: { followBy: req.body.follower },
    // });
    const followd = await User.findById(req.body.followed).select({
      followBy: 1,
    });

    const follower = await User.findById(req.body.follower).select({
      follower: 1,
    });
    const uHaveFollowdme = followd.followBy.find(
      (u) => u._id == req.body.follower
    );

    if (uHaveFollowdme) {
      res.status(200).json({ msg: false });
    } else {
      await followd.followBy.push(req.body.follower);
      await follower.follower.push(req.body.followed);

      await followd.save();
      await follower.save();
      res.status(200).json({ msg: true });
    }
    // const follower = await User.findByIdAndUpdate(req.body.follower, {
    //   $push: { follower: req.body.followed },
    // });
    //   .select({ _id: 1 })
    //   .lean();
  } catch (err) {
    console.log(err);
  }
}
// }
// follower: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//   ],
//   followBy: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//   ],
