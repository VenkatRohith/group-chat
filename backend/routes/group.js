const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

//require auth for all group routes
router.use(requireAuth);

//create group
router.post("/", () => {});

//delete group
router.delete("/:groupId", () => {});

//search user in group
router.get("/", () => {});

//add user to group
router.patch("/", () => {});

module.exports = router;
