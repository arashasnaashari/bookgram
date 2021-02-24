import Comment from "../../model/comment";
import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  const deletedComment = await Comment.findByIdAndDelete(req.body.commentId);
  await deletedComment;
  res.status(200).json({ msg: true });
}
