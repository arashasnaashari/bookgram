import Book from "../../../model/Book";
import dbConnect from "../../../utils/dbConnect";
export default async function userHandler(req, res) {
  await dbConnect();

  const {
    query: { _id },
    method,
  } = req;

  switch (method) {
    case "GET":
      const books = await Book.find({})
        .select({
          _id: 1,
        })
        .lean();
      res.status(200).json(books);
      break;
    case "PUT":
      // Update or create data in your database
      res.status(200).json({ msg: true });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
