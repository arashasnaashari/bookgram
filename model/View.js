const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const viewsSchema = new Schema({
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
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
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

var View;

if (mongoose.models && mongoose.models.View) {
  View = mongoose.model("View");
} else {
  View = mongoose.model("View", viewsSchema);
}

module.exports = View;
