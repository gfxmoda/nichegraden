import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    designer: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    story: {
      type: String,
      required: true,
    },
    mainAccords: {
      type: [String],
      required: true,
    },
    keyNotes: {
      type: [String],
      required: true,
    },
    ingredients: {
      type: [String],
      required: true,
    },
    size: {
      type: [String],
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    hero: {
      type: String,
      required: true,
    },
    highlightedImage: {
      type: String,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    numPurchased: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: {
      type: [reviewSchema],
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
