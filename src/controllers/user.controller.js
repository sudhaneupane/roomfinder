import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asynchandler.js";
import bcrypt from "bcrypt";

const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json("All fields are required");
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userCreate = await User.create({
      email,
      password: hashedPassword
    });

    return res.status(201).json("User created successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).json("Cannot create user");
  }
});

const checkUserCredentials = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUserEmail = await User.findOne({ email });
    if (!checkUserEmail) {
      return res.status(401).json("Invalid credentials");
    }
    const same = await bcrypt.compare(password, checkUserEmail.password);
    if (same) {
      return res.status(200).json("Login successful");
    } else {
      return res.status(401).json("Invalid credentials");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("An error occurred while checking credentials");
  }
});

export { registerUser, checkUserCredentials };
