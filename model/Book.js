const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const autopopulate = require("mongoose-autopopulate");
const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  publication: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  translator: {
    type: String,
    required: false,
  },
  star: {
    type: Number,
    required: false,
    default: 5,
  },
  nstar: {
    type: Number,
    required: false,
    default: 1,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  nsale: {
    type: Number,
    required: false,
    default: 0,
  },
  data: {
    type: Number,
    required: false,
    default: Date.now(),
  },
});

var Book;

if (mongoose.models && mongoose.models.Book) {
  Book = mongoose.model("Book");
} else {
  Book = mongoose.model("Book", bookSchema);
}

module.exports = Book;
