import Book from "../../model/Book";
import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  switch (method) {
    case "PUT":
      const books = await Book.findByIdAndUpdate(req.body.bookId, {
        $inc: { star: req.body.star, nstar: 1 },
      });
      res.status(200).json({ msg: true });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
