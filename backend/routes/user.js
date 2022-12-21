const express = require("express");
const {
  createUser,
  editUser,
  getUsers,
} = require("../controllers/userController");
const requireAuth = require("../middleware/requireAuth");
const isUserAdmin = require("../middleware/isUserAdmin");
const router = express.Router();

//require auth for all user routes
router.use(requireAuth);

//get all users
router.get("/", getUsers);

//check for Admin privileges to create or edit user
router.use(isUserAdmin);

//create user
router.post("/", createUser);

//edit user
router.patch("/:userId", editUser);

module.exports = router;
