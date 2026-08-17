import mongoose from "mongoose";
const commentSchema = new mongoose.Schema(
  {
    commentFor: { type: String, required: true },
    author: { type: String, required: true },
    text: { type: String, required: true },
    isSpoil: { type: Boolean, default: false },
    status: { type: String, enum: ["pending", "approved"], default: "pending" },
  },
  { timestamps: true },
);
const Comment = mongoose.model("comments", commentSchema);
export default Comment;