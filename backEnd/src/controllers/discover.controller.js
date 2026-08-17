import Serie from "../models/series.model.js";
import Movie from "../models/movie.model.js";
const takeSimilarContent = async (req, res) => {
  const dataSlug = req.params.slug;
  const [movie, series] = await Promise.all([
    Serie.findOne({ slug: dataSlug }),
    Movie.findOne({ slug: dataSlug }),
  ]);
  if (!movie && !series) {
    res.json({ message: "NOT_FOUND" });
  }
  const current = movie || series;
  const [similaMovies, similarSeries] = await Promise.all([
    Serie.find({
      _id: { $ne: current._id },
      genres: { $in: current.genres },
    }).limit(5),
    Movie.find({
      _id: { $ne: current._id },
      genres: { $in: current.genres },
    }).limit(5),
  ]);
  res.json([...similaMovies, ...similarSeries]);
};

const takeTrendContent = async (req, res) => {
  const totalTrendSeries = await Serie.find({ trending: true });
  const totalTrendMovies = await Movie.find({ trending: true });
  res.json([...totalTrendMovies, ...totalTrendSeries]);
};
export { takeSimilarContent, takeTrendContent };
