import "../../style.css";
import "../header/header.js";
import fetchDataAndCreateCards from "../takeMovies";
fetchDataAndCreateCards("/api/movies", ".movies-page-movies-container");
