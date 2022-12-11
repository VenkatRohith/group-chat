const express = require("express");

const router = express.Router();

//create user
router.post("/", () => {});

//edit user
router.patch("/:userId", () => {});

//get all users
router.get("/", () => {});

module.exports = router;
