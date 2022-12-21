const express = require("express");
const { login, logout } = require("../controllers/userLoginController");
const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

//login
router.post("/login", login);

router.use(requireAuth);

//logout
router.post("/logout", logout);

module.exports = router;
