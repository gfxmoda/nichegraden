import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const AddressSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
    default: "",
  },
  street: {
    type: String,
    required: false,
    default: "",
  },
  city: {
    type: String,
    required: false,
    default: "",
  },
  country: {
    type: String,
    required: false,
    default: "",
  },
  mobile: {
    type: String,
    required: false,
    default: "",
  },
  email: {
    type: String,
    required: false,
    default: "",
  },
});

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    //
    dob: {
      type: Date,
      required: false,
      default: new Date("<1985-01-01>"),
    },
    mobile: {
      type: String,
      required: false,
      default: "",
    },
    receivesMail: {
      type: Boolean,
      required: false,
      default: false,
    },
    avatar: {
      type: String,
      required: false,
      default: "images/avatar.png",
    },
    billing: {
      type: AddressSchema,
      required: false,
    },
    shipping: {
      type: AddressSchema,
      required: false,
    },
    pointsEarned: {
      type: Number,
      required: false,
      default: 0,
    },

    //
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
