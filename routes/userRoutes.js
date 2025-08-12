const express = require("express");
const {
  registerUser,
  setPassword,
  loginUser,
  logoutUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register-user", registerUser);
router.post("/set-password", setPassword);
router.post("/login", loginUser);
router.post("/logout", protect, logoutUser);

module.exports = router;
