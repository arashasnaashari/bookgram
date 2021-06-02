import Book from "../../../model/Book";
import dbConnect from "../../../utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  const {
    query: { slug },
  } = req;
  //slug[1,2,3]
  //  { reply: { $slice: [0, 3] } }
  const books = await Book.find({})
    .sort({ nsale: 1 })
    .skip(+slug[0])
    .limit(+slug[1])
    .select({
      nsale: 1,
      title: 1,
      image: 1,
      author: 1,
      star: 1,
      nstar: 1,
    })
    .lean();
  res.status(200).json(books);
}
