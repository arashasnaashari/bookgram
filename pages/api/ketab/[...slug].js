import Post from "../../../model/Post";
import dbConnect from "../../../utils/dbConnect";
export default async function userHandler(req, res) {
  await dbConnect();

  const {
    query: { slug },
    method,
  } = req;

  switch (method) {
    case "GET":
      if (slug[0] == "author") {
        const posts = await Post.find({ author: slug[1] })
          .skip(+slug[2])
          .limit(+slug[3])
          .sort({ like: 1 })
          .populate({
            path: "creator",
            options: {
              select: { username: 1, profileURL: 1 },
            },
          })
          .lean();
        res.status(200).json(posts);
      } else if (slug[0] == "translator") {
        const posts = await Post.find({ translator: slug[1] })
          .skip(+slug[2])
          .limit(+slug[3])
          .sort({ like: 1 })
          .populate({
            path: "creator",
            options: {
              select: { username: 1, profileURL: 1 },
            },
          })
          .lean();
        res.status(200).json(posts);
      } else if (slug[0] == "category") {
        const posts = await Post.find({ category: slug[1] })
          .skip(+slug[2])
          .limit(+slug[3])
          .sort({ like: 1 })
          .populate({
            path: "creator",
            options: {
              select: { username: 1, profileURL: 1 },
            },
          })
          .lean();
        res.status(200).json(posts);
      } else if (slug[0] == "publication") {
        const posts = await Post.find({ publication: slug[1] })
          .skip(+slug[2])
          .limit(+slug[3])
          .sort({ like: 1 })
          .populate({
            path: "creator",
            options: {
              select: { username: 1, profileURL: 1 },
            },
          })
          .lean();
        res.status(200).json(posts);
      }

      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
