import Movie from "../models/movie.model.js";
const takeMovies = async (req, res) => {
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

export { takeMovies };