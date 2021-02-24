import Post from "../../model/Post";
import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  switch (method) {
    case "PUT":
      const books = await Post.findByIdAndUpdate(req.body.bookId, {
        $inc: { like: 1 },
      });
      res.status(200).json({ msg: true });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
