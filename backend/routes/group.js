const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();
const {
  createGroup,
  deleteGroup,
  searchUserInGroup,
  addUserToGroup,
} = require("../controllers/groupController");

//require auth for all group routes
router.use(requireAuth);

//create group
router.post("/", createGroup);

//delete group
router.delete("/:groupId", deleteGroup);

//search user in group
router.get("/:groupId/:searchValue", searchUserInGroup);

//add user to group
router.patch("/:groupId/:userId", addUserToGroup);

module.exports = router;
