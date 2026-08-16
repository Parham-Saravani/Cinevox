import { apiRequest } from "./services/apiRequest";
import changePageContent from "./details/renderDetails";

const fetchMovieDataAndChangeContent = async (endpoint) => {
  const params = new URLSearchParams(location.search);
  const movieSlug = params.get("title");
  try{
    const totalData = await Promise.all([apiRequest(endpoint , movieSlug), ])    
    const { title , banner , bannerDescription , cast , director , duration , genres , overview , poster , rating , releaseYear , screenshots , trailer , type , seasons} = totalData[0]
    document.title = `${title} | Cinevo`
    changePageContent(title , banner , bannerDescription , cast , director , duration , genres , overview , poster , rating , releaseYear , screenshots , trailer , type , seasons)

  }catch(err){}
};

export default fetchMovieDataAndChangeContent