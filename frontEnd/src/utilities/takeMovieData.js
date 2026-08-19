import { apiRequest } from "./services/apiRequest";
import changePageContent from "./details/renderDetails";
import createCards from "./render/cardRenderer.js";
import emptyStateHandler from "../components/emptyState/detailPageEmptyState.js";
import renderComments from "./details/comments/renderComments.js";
import commentsEmptyState from "../components/emptyState/commentsEmptyState.js";

const fetchMovieDataAndChangeContent = async (endpoint) => {
  const params = new URLSearchParams(location.search);
  const movieSlug = params.get("title");
  if (movieSlug) {
    try {
      const totalData = await Promise.all([
        apiRequest(endpoint, movieSlug),
        apiRequest("/api/comment", movieSlug),
        apiRequest("/api/discover/similar", movieSlug),
      ]);

      if (totalData[0] !== null) {
        const {
          title,
          slug,
          banner,
          bannerDescription,
          cast,
          director,
          duration,
          genres,
          overview,
          poster,
          rating,
          releaseYear,
          screenshots,
          trailer,
          type,
          seasons,
        } = totalData[0];
        document.title = `${title} | Cinevo`;
        changePageContent(
          title,
          slug,
          banner,
          bannerDescription,
          cast,
          director,
          duration,
          genres,
          overview,
          poster,
          rating,
          releaseYear,
          screenshots,
          trailer,
          type,
          seasons,
        );
      } else {
        emptyStateHandler();
      }
      //! comments
      if (totalData[1].length) {
        renderComments(totalData[1]);
      } else {
        commentsEmptyState()
      }
      //! sililar content
      if (totalData[2].length) {
        createCards(".similar-series-movies", totalData[2], true);
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    emptyStateHandler();
  }
};

export default fetchMovieDataAndChangeContent;
