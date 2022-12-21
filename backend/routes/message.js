const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const {
  sendMessage,
  likeMessage,
} = require("../controllers/messageController");

const router = express.Router();

//require auth for all message routes
router.use(requireAuth);

//send message in group
router.post("/", sendMessage);

//like message in group
router.patch("/:messageId", likeMessage);

module.exports = router;
