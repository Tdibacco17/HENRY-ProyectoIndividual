const { Router } = require('express');
const {getTemperaments, postDogs, getDogId, getDogs, deleteDog, temperamentsDataBase} = require("../controllers/index")

const router = Router();

router.get("/dogs", getDogs);
router.get("/dogs/:idRaza", getDogId);
router.post("/dogs", postDogs);
router.get("/temperaments", getTemperaments );
router.delete("/dogs/:idRaza", deleteDog);
// router.get("/temperamentsDataBase", temperamentsDataBase)

module.exports = router;
