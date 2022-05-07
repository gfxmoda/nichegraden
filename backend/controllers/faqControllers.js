import asyncHandler from "express-async-handler";
import FAQ from "../models/faqModel.js";

//

// @desc       fetch all FAQs
// @route      GET /api/FAQs
// @access     public
const getFAQs = asyncHandler(async (req, res) => {
  const faqs = await FAQ.find({});

  res.json(faqs);
});

export { getFAQs };
