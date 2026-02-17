const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
router.post(
  "/creatuser",
  [body("email").isEmail(), body("password").isLength({ min: 5 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
      });
    }
  },
);
router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let useremail = await User.findOne({ email });
      if (!useremail) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }
      if (req.body.password !== useremail.password) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }
      return res.json({
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "You are not register" });
    }
  },
);
router.post("/getuserdata", async (req, res) => {
  try {
    const { name, email, location } = req.body;
    let query = {};
    if (email) query.email = email;
    else if (name) query.name = name;
    else if (location) query.location = location;
    else
      return res
        .status(400)
        .json({
          success: false,
          message: "Please provide at least one search parameter",
        });

    const user = await User.findOne(query);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Return user data (excluding password for security)
    return res.json({
      success: true,
      data: {
        name: user.name,
        email: user.email,
        location: user.location,
        date: user.date,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
});
module.exports = router;
