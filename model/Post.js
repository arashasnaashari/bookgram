const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    autopopulate: true,
  },
  data: {
    type: String,
    required: true,
  },
  views: [
    {
      type: Schema.Types.ObjectId,
      ref: "View",
    },
  ],
  date: {
    type: String,
    required: true,
  },
  like: {
    type: Number,
    required: false,
  },
  tags: [
    {
      type: String,
      required: false,
    },
  ],
});

var Post;

if (mongoose.models && mongoose.models.Post) {
  Post = mongoose.model("Post");
} else {
  Post = mongoose.model("Post", postSchema);
}

module.exports = Post;
