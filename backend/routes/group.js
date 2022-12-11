const express = require("express");

const router = express.Router();

//create group
router.post("/", () => {});

//delete group
router.delete("/:groupId", () => {});

//search user in group
router.get("/", () => {});

//add user to group
router.patch("/", () => {});

module.exports = router;
