import Post from "../../model/Post";
import View from "../../model/View";
import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  const createdComment = await View.findOne({
    creator: req.body.userId,
    post: req.body.bookId,
  })
    .select({ _id: 1 })
    .lean();
  if (createdComment) {
    res.status(200).json({
      msg: "فقط یک بار می توانید نظر دهید ؛ می توانید نظر قبلی خود را حذف کنید",
    });
  } else {
    const comment = new View({
      text: req.body.text,
      creator: req.body.userId,
      post: req.body.bookId,
      date: Date.now(),
    });
    try {
      const book = await Post.findByIdAndUpdate(req.body.bookId, {
        $push: { views: comment },
      })
        .select({ _id: 1 })
        .lean();
      await comment.save();
      res.status(200).json({ msg: true });
    } catch (err) {
      console.log(err);
    }
  }
}
