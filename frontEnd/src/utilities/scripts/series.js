import "../../style.css";
import "../header/header.js";
import fetchDataAndCreateCards from "../takeMovies";
fetchDataAndCreateCards("/api/series", ".movies-page-movies-container");
