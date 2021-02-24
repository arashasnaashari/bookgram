import View from "../../model/View";
import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  const deletedComment = await View.findByIdAndDelete(req.body.commentId);
  await deletedComment;
  res.status(200).json({ msg: true });
}
