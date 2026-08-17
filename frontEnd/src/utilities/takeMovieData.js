import { apiRequest } from "./services/apiRequest";
import changePageContent from "./details/renderDetails";
import createCards from "./render/cardRenderer.js"
const fetchMovieDataAndChangeContent = async (endpoint) => {
  const params = new URLSearchParams(location.search);
  const movieSlug = params.get("title");
  try{
    const totalData = await Promise.all([apiRequest(endpoint , movieSlug), apiRequest("/api/discover/similar",movieSlug)])   
    createCards('.similar-series-movies', totalData[1] , true) 
    const { title , slug , banner , bannerDescription , cast , director , duration , genres , overview , poster , rating , releaseYear , screenshots , trailer , type , seasons} = totalData[0]
    document.title = `${title} | Cinevo`
    changePageContent(title , slug , banner , bannerDescription , cast , director , duration , genres , overview , poster , rating , releaseYear , screenshots , trailer , type , seasons)

  }catch(err){
    console.log(err);
  
  }
};

export default fetchMovieDataAndChangeContent