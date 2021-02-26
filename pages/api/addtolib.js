import Read from "../../model/reader";
import dbConnect from "../../utils/dbConnect";
export default async function handler(req, res) {
  await dbConnect();
  try {
    const createdShelf = await Read.findOne({
      userId: req.body.userId,
      book: req.body.bookId,
    })
      .select({ _id: 1 })
      .lean();

    if (createdShelf) {
      res.status(200).json({ sign: "قبلا خریدی" });
    } else {
      const newBook = new Read({
        userId: req.body.userId,
        book: req.body.bookId,
        pages: [0],
        time: [0],
        date: [new Date().toISOString().slice(0, 10)],
      });
      const result = await newBook.save();
      res.status(200).json({ sign: true });
    }
  } catch (error) {
    res.status(400).json({ sign: false });
  }
}
