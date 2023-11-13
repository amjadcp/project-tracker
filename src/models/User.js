import mongoose from "mongoose";
import validator from "validator";

// sample use-case
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      minlength: 3,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "please provide valid email",
      },
      trim: true,
    },
    department: {
      type: String,
      required: [true, "Please provide department"],
      enum: ["design", "development", "marketing", "sales"],
      default: "development",
    },
    role: {
      type: String,
      required: [true, "Please provide role"],
      enum: ["designer", "back-end", "front-end", "ops"],
      default: "backe-end",
    },
    // password: {
    //   type: String,
    //   required: [true, "Please provide password"],
    //   minlength: 6,
    //   trim: true,
    // },
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);

export default User;