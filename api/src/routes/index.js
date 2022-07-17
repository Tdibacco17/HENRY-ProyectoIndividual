const { Router } = require('express');
const {getTemperaments, postDogs, getDogId, getDogs, deleteDog} = require("../controllers/index")

const router = Router();

router.get("/dogs", getDogs);
router.get("/dogs/:idRaza", getDogId);
router.post("/dogs", postDogs);
router.get("/temperaments", getTemperaments );
router.delete("/dogs/:idRaza", deleteDog);

module.exports = router;
