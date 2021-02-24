import Book from "../../model/Book";
import Comment from "../../model/comment";
import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  const createdComment = await Comment.findOne({
    creator: req.body.userId,
    book: req.body.bookId,
  })
    .select({ _id: 1 })
    .lean();
  if (createdComment) {
    res.status(200).json({
      msg: "فقط یک بار می توانید نظر دهید ؛ می توانید نظر قبلی خود را حذف کنید",
    });
  } else {
    const comment = new Comment({
      text: req.body.text,
      creator: req.body.userId,
      book: req.body.bookId,
      date: Date.now(),
    });
    try {
      const book = await Book.findByIdAndUpdate(req.body.bookId, {
        $push: { comments: comment },
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
