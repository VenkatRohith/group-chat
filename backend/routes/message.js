const express = require("express");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//require auth for all message routes
router.use(requireAuth);

//send message in group
router.post("/", () => {});

//like message in group
router.patch("/:groupId", () => {});

module.exports = router;
