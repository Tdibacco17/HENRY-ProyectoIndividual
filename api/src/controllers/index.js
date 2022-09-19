const {Dog, Temperament} = require ('../db.js');
const {allDogs, getTemperamentsFromApi, findNameInApi} =require ("./functions.js")

const getDogs = async (req, res) => { // obtener todos los perros y filtrar por nombre 
    
    const { name } = req.query;
    let result;
    try{  
        let totalDogs = await allDogs();
        if(name) {
         result= totalDogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
        }else {
            result = totalDogs;
        }
        if(result.length === 0) return res.status(404).json({error: "The dog does not exist"});
        res.status(200).json(result);
    }catch{
        res.status(404).json({error: "Hubo un error..."});
    }
}; 

const getDogId = async (req, res) => {  // filtro de perros por id
    const { idRaza } = req.params;
    let totalDogs = await allDogs();
    try{
        result = totalDogs.filter(e => e.id == idRaza);
        if(result.length === 0) return res.status(404).json({error: "No existe el perro con dicho Id"});
        res.status(200).json(result);
    }catch{
        res.status(404).json({error: "Hubo un error..."});
    }
};

const postDogs = async (req, res) => {  // crear un perro
    const { name, height_min, height_max, weight_min, weight_max, year_min, year_max, origin,  image, temperament} = req.body;
    
    if(!name || !height_min || !weight_min ) return res.status(404).json({error: "Falta enviar datos obligatorios"});
    
    if(name){
        if(await findNameInApi(name)) return res.status(404).json({error: "the Dog already exists..."}); // valido en api
        let findDogNameInDB = await Dog.findOne({
                where: {name: name.toLowerCase()}
            });
         if(findDogNameInDB) return res.status(404).json({error: "the Dog already exists..."}); //valido en db
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
                where: {name: temperament}
            });
            await dog.addTemperament(findTempDog);
            res.status(200).json("Created Dog!");
    } catch {
        res.status(404).send({error: "Error en alguno de los datos provistos"});
    }
};

const temperamentsDataBase = async () => {
    try{
        const upTemperaments = await getTemperamentsFromApi();

        const arrayTemps = upTemperaments.map(e => e.name.split(", "));
        let setTemp = new Set (arrayTemps.flat()); // flat crea una nueva matriz con todos los elementos de sub-array [1.2[3.4]]
                                                    //new set hace que no se repitan los mismos valores
        for (e of setTemp) {
            if (e) await Temperament.findOrCreate({
            where: { 
                name: e 
            }});
        }
        return res.json("Todo OK")
    }catch(e){
        console.log(e)
    }
}

const getTemperaments = async (req, res) => { // muestro todos los temperamentos y los levanto en la base datos
        
    try{    
        let tempers = await Temperament.findAll();
        res.json(tempers);
    }catch{
        res.status(404).json({error: "Hubo un error..."});
    }
};

const deleteDog = async (req, res) => {
    const {idRaza} = req.params
    
    try{
        let deleteDog = await Dog.destroy({
            where: {id: idRaza}
        })
        res.status(200).json('Dog Deleted')
    }catch(error){
        res.status(404).json(error.message)
    }
}

module.exports = {
    getTemperaments,
    postDogs,
    getDogId,
    getDogs,
    deleteDog,
    temperamentsDataBase
}
