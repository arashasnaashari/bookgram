const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  profileURL: {
    type: String,
    required: false,
    default:
      "https://www.seekpng.com/png/full/41-410093_circled-user-icon-user-profile-icon-png.png",
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  views: [
    {
      type: Schema.Types.ObjectId,
      ref: "View",
    },
  ],
  reader: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reader",
    },
  ],
  follower: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  followBy: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  bio: {
    type: String,
    required: false,
  },
});

var User;

if (mongoose.models && mongoose.models.User) {
  User = mongoose.model("User");
} else {
  User = mongoose.model("User", userSchema);
}

module.exports = User;
