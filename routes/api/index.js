const path = require("path");
const router = require("express").Router();
const wineRoutes = require("./wines");

// Book routes
router.use("/wines", wineRoutes);

// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../build/index.html"));
});

module.exports = router;
