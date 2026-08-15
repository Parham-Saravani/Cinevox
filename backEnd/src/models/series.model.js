import mongoose from "mongoose";
const serieSchema = new mongoose.Schema(
  {
    title: { type: String },
    type: { type: String, enum: ["series", "anime"] }, // movie | series | anime

    poster: { type: String },
    banner: { type: String },

    overview: { type: String },

    bannerDescription: { type: String },

    releaseYear: { type: String },

    genres: [String],

    rating: { type: String },

    ageRating: { type: String }, // TV-MA, R, PG-13, TV-14, ...

    runtime: { type: String },

    director: { type: String },

    cast: [{ title: { type: String }, image: { type: String } }],

    featured: { type: Boolean, default: false },
    trending: { type: Boolean, default: false },

    seasons: [
      {
        title: { type: String },
        episodes: [
          {
            title: { type: String },
            releaseDate: { type: String },
            videoUrl: { type: String },
          },
        ],
      },
    ],
  },
  { timestamps: true },
);

const Serie = mongoose.model("Serie", serieSchema);
export default Serie;
