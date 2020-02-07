const messageController = require("../controllers/messages");

module.exports = function(app) {
  app.get("/api/messages", messageController.all);
  app.post("/api/messages", messageController.create);
};
