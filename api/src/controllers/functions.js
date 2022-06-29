const {Dog, Temperament} = require ('../db.js');
const axios = require("axios");
const { API_KEY } = process.env;

async function getDogsFromApi() {  //refactorizar 
    const apidog = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);   
    
    return await apidog.data.map(e => {
       return {               
        id: e.id,
        name: e.name,
        height: e.height.imperial,
        weight: e.weight.imperial,
        years: e.life_span,
        temperament: e.temperament? [{name: e.temperament}] : "Unknown"
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
    const alldogs = api.concat(database);
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