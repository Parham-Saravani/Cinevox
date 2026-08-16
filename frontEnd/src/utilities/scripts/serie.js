import "../../style.css";
import "../slider/movieAndSeriesSliders.js";
import fetchMovieDataAndChangeContent from "../takeMovieData.js";
fetchMovieDataAndChangeContent("/api/series");
