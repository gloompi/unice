import mongoose from "mongoose";

const bannerSchema = mongoose.Schema({
  name: String,
  link: String,
  image: String,
});

export const Banner = mongoose.model("Banner", bannerSchema);
