const router = require("express").Router();
const wineController = require("../../controllers/wineController");

// Matches with "/api/books"
router.route("/").get(wineController.findAll);

// Matches with "/api/books/:id"
router.route("/:id").get(wineController.findById);

module.exports = router;
