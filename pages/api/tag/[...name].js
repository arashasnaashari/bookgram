import Post from "../../../model/Post";
import dbConnect from "../../../utils/dbConnect";
import User from "../../../model/User";

export default async function userHandler(req, res) {
  await dbConnect();

  const {
    query: { name },
    method,
  } = req;

  switch (method) {
    case "GET":
      const posts = await Post.find({ tags: name[0] })
        .skip(+name[1])
        .limit(+name[2])
        .select({ title: 1, body: 1, image: 1, date: 1, creator: 1 })
        .sort({ like: 1 })
        .populate({
          path: "creator",
          options: {
            select: { username: 1, profileURL: 1 },
          },
        })
        .lean();
      res.status(200).json(posts);
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
