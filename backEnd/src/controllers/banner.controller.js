import Serie from "../models/series.model.js";
import Movie from "../models/movie.model.js";
import Banner from "../models/banner.model.js"

const createNewBanner = async (req, res) => {
  const currentSlug = req.params.slug;
  console.log(currentSlug);
  
  try {
    const current = await Serie.findOne({slug: currentSlug}, {_id:false , title:true , banner:true , slug:true , bannerDescription:true, releaseYear:true , genres:true , rating:true , duration:true}) || await Movie.findOne({slug: currentSlug}, {_id:false , title:true , banner:true , slug:true , bannerDescription:true, releaseYear:true , genres:true , rating:true , duration:true});
    console.log(current);
    await Banner.create({title:current.title , banner:current.banner, slug:current.slug , bannerDescription:current.bannerDescription, releaseYear:current.releaseYear, genres:current.genres,rating:current.rating,duration:current.duration})
    res.json({message:"CREATED"})
    } catch (error) {
    res.json({message:"NOT_CREATED"})
  }
};

export { createNewBanner };
