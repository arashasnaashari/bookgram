import User from "../../model/User";
import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  try {
    const book = await User.findById(req.body.userId).select({
      books: 1,
    });
    const uHaveAded = book.books.find((u) => u._id == req.body.bookId);

    if (uHaveAded) {
      res.status(200).json({ msg: false });
    } else {
      await book.books.push(req.body.bookId);
      await book.save();
      res.status(200).json({ msg: true });
    }
  } catch (err) {
    console.log(err);
  }
}
