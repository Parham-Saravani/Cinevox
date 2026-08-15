import Movie from "../models/movie.model.js";
import Serie from "../models/series.model.js"
const takeHomeData = async (req, res) => {
  const trendMovies = await Movie.find({ trending: true });
  const trendSerie = await Serie.find({ trending: true });
  
  res.json()
};

export { takeHomeData };
