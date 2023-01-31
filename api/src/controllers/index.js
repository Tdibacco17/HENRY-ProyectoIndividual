const { Dog, Temperament } = require('../db.js');
const { allDogs, getTemperamentsFromApi, findNameInApi } = require("./functions.js")

const loadTemperamentsDatabase = async (req, res) => {
    //CARGAR DATABASE
    try {
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
        res.status(200).json({
            succes: true,
            msg: "DATABASE CARGADA"
        });
    } catch (e) {
        res.status(500).json({
            succes: false,
            msg: `ENTRO AL CATCH : ${e}`
        });
    }
}

const getDogs = async (req, res) => { // obtener todos los perros y filtrar por nombre 
    const { name } = req.query;

    try {
        let result;
        let totalDogs = await allDogs();

        if (typeof name === "number") {
            return res.status(200).json({
                succes: true,
                msg: "Invalid search parameter. Text only",
                result: []
            });
        }

        if (name) {
            result = totalDogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
        } else {
            result = totalDogs;
        }


        if (result.length === 0) {
            return res.status(200).json({
                succes: true,
                msg: "Can't find a dog with that name",
                result: []
            });
        }
        return res.status(200).json({
            succes: true,
            msg: "Envio de todos los perros",
            result: result
        });
    } catch (e) {
        res.status(500).json({
            succes: false,
            msg: `ENTRO AL CATCH : ${e}`,
            result: []
        });
    }
};

const getDogId = async (req, res) => {  // filtro de perros por id
    const { idRaza } = req.params;

    try {
        let totalDogs = await allDogs();

        result = totalDogs.filter(e => e.id == idRaza);

        if (result.length === 0) return res.status(200).json({
            succes: true,
            msg: `No se encontro el perro con ID: ${idRaza}`,
            result: []
        });

        return res.status(200).json({
            succes: true,
            msg: `Can't find dog with ID: ${idRaza}`,
            result: result
        });
    } catch (e) {
        res.status(500).json({
            succes: false,
            msg: `ENTRO AL CATCH : ${e.menssage}`,
            result: []
        });
    }
};

const postDogs = async (req, res) => {  // crear un perro
    const { name, height_min, height_max, weight_min, weight_max, year_min, year_max, image, temperament } = req.body;

    if (!name || !height_min || !weight_min || !temperament) return res.status(200).json({
        succes: false,
        msg: "Falta enviar datos obligatorios"
    });

    if (name) {
        if (await findNameInApi(name)) return res.status(200).json({
            succes: false,
            msg: "Ya existe un perro con ese nombre en la api"
        }); // valido en api

        let findDogNameInDB = await Dog.findOne({
            where: { name: name }
        });

        if (findDogNameInDB) return res.status(200).json({
            succes: false,
            msg: "Ya existe un perro con ese nombre en la base de datos"
        }); //valido en db
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

        return res.status(200).json({
            succes: true,
            msg: "Perro creado con exito"
        });
    } catch (e) {
        res.status(500).json({
            succes: false,
            msg: `ENTRO AL CATCH : ${e}`
        });
    }
};

const getTemperaments = async (req, res) => { // muestro todos los temperamentos y los levanto en la base datos

    try {
        let tempers = await Temperament.findAll();

        if (tempers.length === 0) return res.status(200).json({
            succes: true,
            msg: "No encontro temperamentos en la base de datos",
            result: []
        })
        return res.json({
            succes: true,
            msg: "Envio de todos los temperamentos",
            result: tempers
        });
    } catch {
        res.status(500).json({
            succes: false,
            msg: `ENTRO AL CATCH : ${e}`,
            result: []
        });
    }
};

const deleteDog = async (req, res) => {
    const { idRaza } = req.query

    const regex_UUIDv4 = /^[a-z0-9\-]{36}$/i;

    try {
        if (!idRaza) return res.status(404).json({
            succes: false,
            msg: "Falta un id para eliminar al perro"
        })
        if (!regex_UUIDv4.test(idRaza)) return res.status(404).json({
            succes: false,
            msg: "El parametro ID no cumple con el formato UUIDv4"
        })

        let deleteDog = await Dog.destroy({
            where: { id: idRaza }
        })
        if (deleteDog === 1) {
            return res.status(200).json({
                succes: true,
                msg: 'Perro eliminado con exito'
            })
        } else {
            return res.status(200).json({
                succes: false,
                msg: `No existe perro con ID : ${idRaza}`
            })
        }
    } catch (e) {
        res.status(500).json({
            succes: false,
            msg: `ENTRO AL CATCH : ${e}`,
        });
    }
}

module.exports = {
    getTemperaments,
    postDogs,
    getDogId,
    getDogs,
    deleteDog,
    loadTemperamentsDatabase
}
