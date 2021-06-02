const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const readerSchema = new Schema({
  date: {
    type: Array,
    required: true,
  },
  time: {
    type: Array,
    required: true,
  },
  pages: {   
    type: Array,
    required: true,
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book",
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

var Reader;

if (mongoose.models.Reader) {
  Reader = mongoose.model("Reader");
} else {
  Reader = mongoose.model("Reader", readerSchema);
}

module.exports = Reader;
