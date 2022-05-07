import asyncHandler from "express-async-handler";
import Blog from "../models/blogModel.js";

//

// @desc       fetch all blogs
// @route      GET /api/blogs
// @access     public
const getBlogs = asyncHandler(async (req, res) => {
  // passing an empty object gives us everything
  const blogs = await Blog.find({});

  res.json(blogs);
});

//

// @desc       fetch single blog
// @route      GET /api/blogs/:id
// @access     public
const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    res.json(blog);
  } else {
    res.status(404);
    throw new Error("Blog not found!");
  }
});

export { getBlogs, getBlogById };
