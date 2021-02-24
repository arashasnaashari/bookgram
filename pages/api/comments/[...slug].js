import Comment from "../../../model/comment";
import User from "../../../model/User";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  const {
    query: { slug },
  } = req;
  //slug[1,2,3]
  //  { reply: { $slice: [0, 3] } }
  const commnts = await Comment.find({ book: slug[0] })
    .skip(+slug[1])
    .limit(+slug[2])
    .sort({ date: 1 })
    .populate({
      path: "creator",
      options: {
        select: { username: 1, profileURL: 1 },
      },
    })
    .lean();
  res.status(200).json(commnts);
}
