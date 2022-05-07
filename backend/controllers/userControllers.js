import dotenv from "dotenv";
dotenv.config();

import mailgun from "mailgun-js";
const mg = mailgun({
  apiKey: process.env.MAILGUN_APIKEY,
  domain: process.env.MAILGUN_DOMAIN,
});

import asyncHandler from "express-async-handler";

import {
  generateLoginToken,
  generateRegisterToken,
  verifyToken,
} from "../utils/generateToken.js";

import User from "../models/userModel.js";
import { validateLogin, validateRegister } from "../validation/validation.js";

import {
  generateVerificationHtml,
  generateVerificationMessage,
} from "../config/verification.js";

//

// @desc       Auth user & get token
// @route      POST /api/users/login
// @access     public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  validateLogin(email, password, res);

  const user = await User.findOne({ email });

  if (user) {
    if (await user.matchPassword(password)) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateLoginToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error(`Password doesn't match!`);
    }
  } else {
    res.status(401);
    throw new Error("User not found!");
  }
});

//

// @desc       Register new user
// @route      POST /api/users
// @access     public
const registerUserRequest = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  validateRegister(email, password, res);

  const name = email.split("@")[0];

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists.");
  }

  const generatedToken = generateRegisterToken(name, email, password);

  const data = {
    from: "noreply@nichegardenbh.com",
    to: email,
    subject: "Nichegarden Account Verification",
    html: generateVerificationHtml(name, generatedToken),
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      res.status(500);
      throw new Error({ error: error.message });
    }

    res.status(201).json({
      message: generateVerificationMessage(email),
    });
  });
});

//

// @desc       Activate user account
// @route      POST /api/users/activate
// @access     public
const activateUserAccount = asyncHandler(async (req, res) => {
  const token = req.url.split("/")[req.url.split("/").length - 1];

  if (token) {
    const { name, email, password } = verifyToken(token);

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists.");
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateLoginToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data.");
    }
  } else {
    res.status(400);
    throw new Error("Something went wrong!");
  }
});

//

// @desc       get user profile
// @route      GET /api/users/profile
// @access     private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      dob: user.dob,
      mobile: user.mobile,
      receivesMail: user.receivesMail,
      avatar: user.avatar,
      pointsEarned: user.pointsEarned,
    });
  } else {
    res.json(404);
    throw new Error("User not found.");
  }
});

// @desc       edit user profile
// @route      PUT /api/users/profile
// @access     private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    
    // res.json({
    //   name: user.name,
    //   email: user.email,
    //   isAdmin: user.isAdmin,
    //   dob: user.dob,
    //   mobile: user.mobile,
    //   receivesMail: user.receivesMail,
    //   avatar: user.avatar,
    //   pointsEarned: user.pointsEarned,
    // });
  } else {
    res.json(404);
    throw new Error("User not found.");
  }
});

export { registerUserRequest, activateUserAccount, authUser, getUserProfile };
