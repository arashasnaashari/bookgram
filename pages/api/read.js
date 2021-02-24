import Read from "../../model/reader";
import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  try {
    const createdRead = await Read.find({
      userId: req.body.userId,
      book: req.body.bookId,
      date: req.body.date,
    }).select({ date: 1, time: 1, pages: 1 });
    console.log(createdRead);
    console.log(req.body.date);
    if (createdRead.length > 0) {
      // update  PAGE   TIME
      const UpdatedDay = await Read.findOneAndUpdate(
        { userId: req.body.userId, book: req.body.bookId },
        {
          $pop: { pages: 1, time: 1 },
        }
      );
      const UpdatedDay2 = await Read.findOneAndUpdate(
        { userId: req.body.userId, book: req.body.bookId },
        {
          $push: { time: req.body.time, pages: req.body.pages },
        }
      );
      await UpdatedDay2.save();
      await UpdatedDay.save();
      res.status(200).json({ msg: true });
    } else {
      // its a new day   PAGE  TIME
      const UpdatedDay2 = await Read.findOneAndUpdate(
        { userId: req.body.userId, book: req.body.bookId },
        {
          $push: {
            time: req.body.time,
            pages: req.body.pages,
            date: req.body.date,
          },
        }
      );
      await UpdatedDay2.save();

      res.status(200).json({ msg: true });
    }
  } catch (err) {
    console.log(err);
  }
}
