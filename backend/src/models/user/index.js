import { Schema } from "mongoose";

export default new Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true, // This adds createdAt and updatedAt fields automatically
  }
);