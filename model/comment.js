const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: String,
    required: true,
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book",
  },
  reply: [
    {
      text: {
        type: String,
        required: true,
      },
      userId: { type: String, required: true },
      img: { type: String, required: true },
      name: { type: String, required: true },
      date: {
        type: String,
        required: true,
      },
    },
  ],
});

var Comment;

if (mongoose.models && mongoose.models.Comment) {
  Comment = mongoose.model("Comment");
} else {
  Comment = mongoose.model("Comment", commentSchema);
}

module.exports = Comment;
