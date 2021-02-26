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
      const books = await Book.findById(_id)
        .select({
          title: 1,
          image: 1,
          author: 1,
          star: 1,
          nstar: 1,
        })
        .lean();
      res.status(200).json(books);
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
