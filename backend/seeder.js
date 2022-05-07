import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import users from "./data/users.js";
import User from "./models/userModel.js";

import products from "./data/products-seeder.js";
import Product from "./models/productModel.js";

import FAQs from "./data/FAQs-seeder.js";
import FAQ from "./models/faqModel.js";

import events from "./data/events-seeder.js";
import Event from "./models/eventModel.js";

import blogs from "./data/blogs-seeder.js";
import Blog from "./models/blogModel.js";

import Order from "./models/orderModel.js";

import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await FAQ.deleteMany();
    await Event.deleteMany();
    await Blog.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });

    await Product.insertMany(sampleProducts);

    await FAQ.insertMany(FAQs);
    await Event.insertMany(events);
    await Blog.insertMany(blogs);

    console.log("Data imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await FAQ.deleteMany();
    await Event.deleteMany();
    await Blog.deleteMany();
    await Order.deleteMany();

    console.log("Data destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
