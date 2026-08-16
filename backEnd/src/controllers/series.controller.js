import Serie from "../models/series.model.js";
const takeAllSeries = async (req, res) => {
  const series = await Serie.find();
  const finalSeries = series.map((serie) => {
    return {
      title: serie.title,
      slug: serie.slug,
      type: serie.type,
      genres: serie.genres,
      poster: serie.poster,
    };
  });
  res.json(finalSeries)
};

export { takeAllSeries };
