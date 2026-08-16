import { apiRequest } from "./services/apiRequest";
import changePageContent from "./changePageData";

const fetchMovieDataAndChangeContent = async () => {
  const params = new URLSearchParams(location.search);
  const movieSlug = params.get("title");
  const data = await apiRequest('/api/movies', movieSlug);
  console.log(data);
  const { title , banner , bannerDescription , cast , director , duration , genres , overview , poster , rating , releaseYear , screenshots , trailer , type} = data
  document.title = `${title} | Cinevo`
  changePageContent(title , banner , bannerDescription , cast , director , duration , genres , overview , poster , rating , releaseYear , screenshots , trailer , type)
};

window.addEventListener("load", fetchMovieDataAndChangeContent);
