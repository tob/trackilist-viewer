const mongoose = require("mongoose");
const Song = mongoose.model("songs");

const profileRoutes = (app) => {
  app.get(`/api/songs`, async (req, res) => {
    const songs = await Song.find();

    return res.status(200).send(songs);
  });

  app.post(`/api/song`, async (req, res) => {
    const profile = await Profile.create(req.body);

    return res.status(201).send({
      error: false,
      profile,
    });
  });

  app.put(`/api/song/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Profile.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      profile,
    });
  });

  app.delete(`/api/song/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Profile.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      profile,
    });
  });
};

module.exports = profileRoutes;
