const router = require("express").Router();

const movieRoutes = require("./movies.routes");
router.use("/movies", movieRoutes);

const celebrityRoutes = require("./celebrities.routes");
router.use("/celebrities", celebrityRoutes);

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
