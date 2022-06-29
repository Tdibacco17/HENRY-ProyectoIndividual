const { Router } = require('express');
// Importar todos los routers;// Ejemplo: const authRouter = require('./auth.js');
const {getTemperaments, postDogs, getDogId, getDogs} = require("../controllers/index")
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const router = Router();

router.get("/dogs", getDogs);
router.get("/dogs/:idRaza", getDogId);
router.post("/dogs", postDogs);
router.get("/temperaments", getTemperaments );

module.exports = router;
