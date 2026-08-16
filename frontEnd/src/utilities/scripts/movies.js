import "../../style.css";
import fetchDataAndCreateCards from "../takeMovies";
fetchDataAndCreateCards("/api/movies", ".movies-page-movies-container");
