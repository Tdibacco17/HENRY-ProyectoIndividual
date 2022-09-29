const { Dog, Temperament } = require('../db.js');
const { allDogs, getTemperamentsFromApi, findNameInApi } = require("./functions.js")

const getDogs = async (req, res) => { // obtener todos los perros y filtrar por nombre 
    const { name } = req.query;

    try {
        let result;
        let totalDogs = await allDogs();
        if (typeof name === "number") return res.json([]);
        if (name) {
            result = totalDogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
        } else {
            result = totalDogs;
        }
        if (result.length === 0) return res.json([]);
        return res.status(200).json(result);
    } catch (e) {
        console.log(e);
        return res.json([]);
    }
};

const getDogId = async (req, res) => {  // filtro de perros por id
    const { idRaza } = req.params;
    
    try {
        let totalDogs = await allDogs();
        result = totalDogs.filter(e => e.id == idRaza);
        if (result.length === 0) return res.json([]);

        return res.status(200).json(result);
    } catch(e) {
        console.log(e);
        return res.json([]);
    }
};

const postDogs = async (req, res) => {  // crear un perro
    const { name, height_min, height_max, weight_min, weight_max, year_min, year_max, image, temperament } = req.body;

    if (!name || !height_min || !weight_min) return res.json({ msg: "Falta enviar datos obligatorios" });

    if (name) {
        if (await findNameInApi(name)) return res.status(200).json({ msg: "the Dog already exists..." }); // valido en api
        let findDogNameInDB = await Dog.findOne({
            where: { name: name.toLowerCase() }
        });
        if (findDogNameInDB) return res.status(200).json({ msg: "the Dog already exists..." }); //valido en db
    }

    try {
        const dog = await Dog.create({
            name: name,
            height_min: height_min || "Unknown",
            height_max: height_max || "Unknown",
            weight_min: weight_min || "Unknown",
            weight_max: weight_max || "Unknown",
            year_min: year_min || "Unknown",
            year_max: year_max || "Unknown",
            image: image,
        });
        let findTempDog = await Temperament.findAll({ //busco todos los temperamentos que coincidan con el nombre 
            where: { name: temperament }
        });
        await dog.addTemperament(findTempDog);
        return res.status(200).json({msg: "Created Dog!"});
    } catch(e) {
        console.log(e);
    }
};

const getTemperaments = async (req, res) => { // muestro todos los temperamentos y los levanto en la base datos

    try {
        //CARGAR DATABASE
        const upTemperaments = await getTemperamentsFromApi();

        const arrayTemps = upTemperaments.map(e => e.name.split(", "));
        let setTemp = new Set(arrayTemps.flat()); // flat crea una nueva matriz con todos los elementos de sub-array [1.2[3.4]]
        //new set hace que no se repitan los mismos valores
        for (e of setTemp) {
            if (e) await Temperament.findOrCreate({
                where: {
                    name: e
                }
            });
        }
        let tempers = await Temperament.findAll();
        return res.json(tempers);
    } catch {
       console.log(e)
    }
};

const deleteDog = async (req, res) => {
    const { idRaza } = req.params

    try {
        if(!idRaza || idRaza === ":idRaza") return res.json({msg: "Falta un id para eliminar al perro"})
        let deleteDog = await Dog.destroy({
            where: { id: idRaza }
        })
        
        return res.status(200).json({msg: 'Dog Deleted'})
    } catch (e) {
        console.log(e.menssage)
    }
}

module.exports = {
    getTemperaments,
    postDogs,
    getDogId,
    getDogs,
    deleteDog,
}
