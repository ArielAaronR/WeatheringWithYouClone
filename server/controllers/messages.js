const Message = require("../models/message.model");

module.exports = {
  all(req, res) {
    Message.find()
      .then(messages => {
        res.json({ messages: messages });
      })
      .catch(err => res.status(400).json("Error: " + err));
  },
  create(req, res) {
    const name = req.body.name;
    const description = req.body.description;
    const date = Date.parse(req.body.date);
    const newMessage = new Message({ name, description, date });
    newMessage
      .save()
      .then(() => {
        res.json({ message: newMessage });
      })
      .catch(err => res.status(400).json("Error: " + err));
  }
};
