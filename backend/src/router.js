const express = require("express");

const router = express.Router();

const tileControllers = require("./controllers/TileControllers");

router.get("/tiles", tileControllers.browse);

const boatControllers = require("./controllers/BoatControllers");

router.get("/boats", boatControllers.selectBoat);
router.get("/boats/:id", boatControllers.read);
router.get("/boats/:name", boatControllers.selectBoat);

module.exports = router;
