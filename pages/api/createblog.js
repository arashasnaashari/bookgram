import Post from "../../model/Post";
import dbConnect from "../../utils/dbConnect";
export default async function handler(req, res) {
  await dbConnect();

  try {
    const post = new Post({
      title: req.body.title,
      body: req.body.body,
      creator: req.body.userId,
      image: req.body.image,
      data: req.body.data1,
      date: Date.now(),
      tags: req.body.tags,
    });
    await post.save();
    res.status(200).json({ sign: true });
  } catch (error) {
    res.status(400).json({ sign: false });
  }
}
