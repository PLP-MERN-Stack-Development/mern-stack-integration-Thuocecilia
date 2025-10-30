/// server/routes/profile.js
import express from "express";
import auth from "../middleware/auth.js"; // your auth middleware
import User from "../models/User.js";

const router = express.Router();

// GET logged-in user's profile
router.get("/", auth, async (req, res) => {
  try {
    if (!req.user) return res.status(404).json({ message: "User not found" });
    res.json({
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      createdAt: req.user.createdAt,
      updatedAt: req.user.updatedAt,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
