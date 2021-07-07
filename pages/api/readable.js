import Book from "../../model/Book";
import dbConnect from "../../utils/dbConnect";
import mongoose from "mongoose";

export default async function handler(req, res) {
  await dbConnect();
  const books = await Book.find({
    _id: {
      $in: [
        mongoose.Types.ObjectId("602b6a88cf619c1764f64427"),
        mongoose.Types.ObjectId("602b6a88cf619c1764f64439"),
        mongoose.Types.ObjectId("602b6a88cf619c1764f64434"),
        mongoose.Types.ObjectId("6034e66d5a274de1bd6ed6d0"),
      ],
    },
  })
    .select({
      title: 1,
      image: 1,
      author: 1,
      star: 1,
      nstar: 1,
    })
    .lean();
  res.status(200).json(books);
}
