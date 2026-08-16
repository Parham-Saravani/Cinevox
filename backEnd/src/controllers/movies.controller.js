import Movie from "../models/movie.model.js";
const takeAllMovies = async (req, res) => {
  const movies = await Movie.find();
  const finalMovies = movies.map((movie) => {
    return {
      title: movie.title,
      slug: movie.slug,
      type: movie.type,
      genres: movie.genres,
      poster: movie.poster,
    };
  });
  res.json(finalMovies);
};
const takeMovieData = async (req, res) => {
  const title = req.params.title;
  const movieData = await Movie.findOne({ slug: title });
  res.json(movieData);
};

export { takeAllMovies, takeMovieData };
