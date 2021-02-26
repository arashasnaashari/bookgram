import Post from "../../../model/Post";
import User from "../../../model/User";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  const {
    query: { slug },
  } = req;
  const posts = await Post.find({})
    .skip(+slug[0])
    .limit(+slug[1])
    .select({ title: 1, image: 1, date: 1, creator: 1 })
    .sort({ date: 1 })
    .populate({
      path: "creator",
      options: {
        select: { username: 1, profileURL: 1 },
      },
    })
    .lean();
  res.status(200).json(posts);
}
