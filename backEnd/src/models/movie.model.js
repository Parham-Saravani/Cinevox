import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: { type: String },
    slug: { type: String, required: true },

    type: { type: String, default: "movie" },

    poster: { type: String },
    banner: { type: String },
    video: { type: String },
    overview: { type: String },
    bannerDescription: { type: String },

    releaseYear: { type: String },

    duration: { type: String },
    runtime: { type: String },

    rating: { type: String },
    ageRating: { type: String },

    genres: [String],

    trailer: {
      type: {
        key: { type: String },
        name: { type: String },
        site: { type: String },
      },
      required: true,
      default: null,
    },

    screenshots: { type: [String], required: true, default: null },

    director: { type: String },

    cast: [
      {
        title: { type: String },
        image: { type: String },
      },
    ],

    featured: { type: Boolean, default: false },
    trending: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
