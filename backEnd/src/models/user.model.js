import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    email: { type: String, required: true },
    password: { type: String, required: true },
    imageUrl: { type: String, default: null },
    active: { type: Boolean },
  },
  { timestamps: true },
);

const User = mongoose.model("users", userSchema);
export default User;