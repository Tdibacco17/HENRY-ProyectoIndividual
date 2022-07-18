// conecto el back con el front
import axios from 'axios';

export function postDog(payload) { // crear perro
    return async function(dispatch){
        const response = await axios.post(`/dogs`,payload);
        console.log(response);
        return response;
    };
};

export function getAllDogs() { // traerme todos los perros
    return async function(dispatch){
        let json = await axios.get(`/dogs`);
        return dispatch({
            type: 'GET_ALL_DOGS',
            payload: json.data
        });
    };
};

export function getDogByName(name) { // filtrar perro por name
    return async function(dispatch){
        try{ 
            let json = await axios.get(`/dogs?name=${name}`);
            return dispatch({
                type: 'GET_DOG_BY_NAME',
                payload: json.data
            });
        }catch(error) {
            alert(error.response.data.error);
        }
    };
};

export function getDogById(id) { // filtrar perro por id
    return async function(dispatch){
        try{
            let json = await axios.get(`/dogs/${id}`);
            return dispatch({
                type: 'GET_DOG_BY_ID',
                payload: json.data
            });
        } catch(error) {
            console.log(error);
        }
    };
};

export function getTemperaments() { // me traigo todos los temperamentos
    return async function(dispatch){
        let json = await axios.get(`/temperaments`);
        return dispatch({
            type: 'GET_TEMPERAMENTS',
            payload: json.data
        });
    };
};

export function filterTemperaments(payload) { //filtro de busca por temperamento
    return {
        type: "FILTER_TEMPERAMENT",
        payload: payload
    };
};

export function filterCreated(payload) { //filtro busca de perros por creados y de la api
    return {
        type: "FILTER_CREATED",
        payload: payload
    };
};

export function orderByName(payload) { //ordenamiento de nombres
    return {
        type: "ORDER_BY_NAME",
        payload: payload
    };
};

export function orderByWeight(payload) {//ordenamiento de peso
    return {
        type: 'ORDER_WEIGHT',
        payload
    };
};

export function deleteDog(id){
    return async function(dispatch){
            let json = await axios.delete(`/dogs/${id}`)
            return dispatch({
                type: "DELETE_DOG",
                payload: json
            });
    };
};