const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const JWT_SECRET = process.env.JWT_SECRET;

function registerUser() {
  return async (req, res, next) => {
    try {
      const { username, email, password } = req.body;

      const existingUser = await User.findOne({ email: email });

      if (existingUser) {
        const error = new Error(
          "User already exists, please use another email address"
        );
        error.statusCode = 400;
        throw error;
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });
      // console.log(newUser);
      await newUser.save();

      res.status(201).json({
        message: "User created successfully",
        user: newUser,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

function handleLogin() {
  return async (req, res, next) => {
    const { email, password } = req.body;

    try {
      // Check if the user exists
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      // Return a JWT token
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        "your_jwt_secret",
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  };
}

module.exports = {
  registerUser,
  handleLogin,
};
