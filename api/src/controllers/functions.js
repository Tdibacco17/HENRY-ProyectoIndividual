const {Dog, Temperament} = require ('../db.js');
const axios = require("axios");
const { API_KEY } = process.env;

async function getDogsFromApi() {  //refactorizar 
    const apidog = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);   
    
    return await apidog.data.map(e => {
       return {               
        id: e.id,
        name: e.name,
        height_min: parseInt(e?.height?.metric?.split("-")[0]) || "Unknown",
        height_max: parseInt(e?.height?.metric?.split("-")[1]) || "Unknown",
        weight_min: parseInt(e?.weight?.metric?.split("-")[0]) || "Unknown",
        weight_max: parseInt(e?.weight?.metric?.split("-")[1]) || "Unknown",
        year_min: parseInt(e?.life_span.split("-")[0]) || "Unknown",
        year_max: parseInt(e?.life_span.split("-")[1]) || "Unknown",
        temperament: e.temperament || "Unknown",
        image: e.image.url
       }
    });

};

async function getDogsFromDb(){
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    });
};

async function allDogs(){
    const api = await getDogsFromApi();
    const database = await getDogsFromDb();
    const info = await database.map(e => {
        return {
            id: e.id,
            name: e.name.charAt(0).toUpperCase() + e.name.slice(1), //primera letra mayus para que no me traiga mal en ordenamiento x filtro AZ
            height_min: e.height_min,
            height_max: e.height_max,
            weight_min: e.weight_min,
            weight_max: e.weight_max,
            year_min: e.year_min,
            year_max: e.year_max,
            temperament: e.temperaments.map(e => e.name).toString(),
            image: e.image? e.image:'https://www.clarin.com/img/2021/07/24/llegan-a-pesar-mas-de___yqKyyB2BQ_720x0__1.jpg',
            createdInDb: e.createdInDb
        } 
    });
    const alldogs = api.concat(info);
    return alldogs;
};

async function getTemperamentsFromApi() {  //refactorizar 
    const apidog = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`); 
    
    return await apidog.data.map(e => {
        return {           
            name: e.temperament || "Unknown"
        }
     });
};

async function findNameInApi(name){
    const apidog = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name.toLowerCase()}`);
    if(apidog.data.length === 0) return false;
    return true;
};

module.exports = {
    allDogs,
    getTemperamentsFromApi,
    findNameInApi
}