import View from "../../model/View";
import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();

  const reply = {
    text: req.body.text1,
    userId: req.body.userId,
    img: req.body.img,
    name: req.body.name,
    date: Date.now(),
  };
  try {
    const book = await View.findByIdAndUpdate(req.body._id, {
      $push: { reply: reply },
    })
      .select({ _id: 1 })
      .lean();
    res.status(200).json({ msg: true });
  } catch (err) {
    console.log(err);
  }
}
// }
