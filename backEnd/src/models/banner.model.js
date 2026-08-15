import mongoose from "mongoose";
const bannerSchema = new mongoose.Schema({
  title: { type: String },
  banner: { type: String },
  description: { type: String },
});
