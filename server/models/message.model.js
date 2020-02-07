//This connects to mongoose
const mongoose = require("mongoose");
//Creates the viable to make a schema in the database
const Schema = mongoose.Schema;
//Creating the message Schema properties
const messageSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 3 },
    description: { type: String, required: true, minlength: 3 },
    date: { type: Date, required: true }
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
