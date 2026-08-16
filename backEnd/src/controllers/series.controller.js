import Serie from "../models/series.model.js";
const takeAllSeries = async (req, res) => {
  const series = await Serie.find({} , {title:true , slug: true , type : true, genres:true, poster:true});
  res.json(series);
};
const takeSerie = async (req, res) => {
  const title = req.params.title;
  const serieData = await Serie.findOne({ slug: title });
  res.json(serieData);
};
export { takeAllSeries, takeSerie };
