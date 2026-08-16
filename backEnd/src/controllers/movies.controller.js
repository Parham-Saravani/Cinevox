import Movie from "../models/movie.model.js";
const takeAllMovies = async (req, res) => {
  const movies = await Movie.find({} , {title: true , slug: true , type:true, genres:true, poster:true});
  res.json(movies);
};
const takeMovieData = async (req, res) => {
  const title = req.params.title;
  const movieData = await Movie.findOne({ slug: title });
  res.json(movieData);
};

export { takeAllMovies, takeMovieData };
