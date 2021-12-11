var gameController = require("../controllers/games"); // why note use camelCase?
var express = require("express");
var router = express.Router();


router.get('/all', gameController.getAllGames);
router.get('/season/:season', gameController.getGamesBySeason);
router.get('/id/:id', gameController.getGameById);
router.get('/random', gameController.getRandomGame);
router.get('/season/:season/:number', gameController.getNumberOfGamesBySeason); // USED TO PULL GAMES ON WELCOME MENU

module.exports = router;