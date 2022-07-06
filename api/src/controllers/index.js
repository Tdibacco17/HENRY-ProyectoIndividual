const {Dog, Temperament} = require ('../db.js');
const {allDogs, getTemperamentsFromApi, findNameInApi} =require ("./functions.js")

const getDogs = async (req, res) => { 
    
    const { name } = req.query;
    let result;
    try{  
        let totalDogs = await allDogs();
        if(name) {
         result= totalDogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
        }else {
            result = totalDogs;
        }
        if(result.length === 0) return res.status(404).json({error: "No existe dicho Perro"});
        res.send(result);
    }catch{
        res.status(404).json({error: "Hubo un error..."});
    }
}; 

const getDogId = async (req, res) => { 
    const { idRaza } = req.params;
    let totalDogs = await allDogs();
    try{
        result = totalDogs.filter(e => e.id == idRaza);
        if(result.length === 0) return res.status(404).json({error: "No existe el perro con dicho Id"});
        res.send(result);
    }catch{
        res.status(404).json({error: "Hubo un error..."});
    }
};

const postDogs = async (req, res) => {
    const { name, height_min, height_max, weight_min, weight_max, year_min, year_max, image, temperament} = req.body;
    if(!name || !height_min || !weight_min ) return res.status(404).json({error: "Falta enviar datos obligatorios"});
    if(name){
        if(await findNameInApi(name)) return res.status(404).json({error: "the Dog already exists..."});
        let findDogNameInDB = await Dog.findOne({
                where: {name: name.toLowerCase()}
            });
         if(findDogNameInDB) return res.status(404).json({error: "the Dog already exists..."});
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
                    image: image
            });
            let findTempDog = await Temperament.findAll({
                where: {name: temperament}
            });
            await dog.addTemperament(findTempDog);
            res.status(200).json("Created Dog!");
    } catch {
        res.status(404).send({error: "Error en alguno de los datos provistos"});
    }
};

const getTemperaments = async (req, res) => { 
    const upTemperaments = await getTemperamentsFromApi();
    const arrayTemps = upTemperaments.map(e => e.name.split(", "));
    let setTemp = new Set (arrayTemps.flat());
    
    for (e of setTemp) {
        if (e) await Temperament.findOrCreate({
        where: { 
            name: e 
        }});
    }
    
    let tempers;
    try{    
        tempers = await Temperament.findAll();
        res.send(tempers);
    }catch{
        res.status(404).json({error: "Hubo un error..."});
    }
};

// console.log(Dog.prototype);

module.exports = {
    getTemperaments,
    postDogs,
    getDogId,
    getDogs
}
