import "../../style.css";
import fetchDataAndCreateCards from "../takeMovies";
fetchDataAndCreateCards("/api/series", ".movies-page-movies-container");
