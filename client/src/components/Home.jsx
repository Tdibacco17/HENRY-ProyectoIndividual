import React from "react";
import { useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllDogs, getTemperaments, filterTemperaments, filterCreated, orderByName, orderByWeight} from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card.jsx";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
import "../styles/Home.css";
import "../styles/Filters.css";

// import {Link} from "react-router-dom";

export default function Home(){
    
const dispatch = useDispatch();
const [order, setOrder] = useState("");
const [order2, setOrder2] = useState("");
const allDogs = useSelector((state)=> state.dogs);
const [currentPage, setCurrentPage] = useState(1);
const [dogsPerPage, setdogPerPage] = useState(8);
const indexOfLastDog = currentPage * dogsPerPage;
const indexOfFirstDog = indexOfLastDog - dogsPerPage;
const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
};

useEffect(()=>{
    dispatch(getAllDogs());
    dispatch(getTemperaments());
},[dispatch])

function handleClick(e){
    e.preventDefault();
    dispatch(getAllDogs());
};

const temperamentos= useSelector((state)=>state.temperaments);

function handleTemperament(e) {
    e.preventDefault();
    dispatch(filterTemperaments(e.target.value));
};

function handleCreated(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
};

function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
};

function handleWeight(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setCurrentPage(1);
    setOrder2(`Ordenado ${e.target.value}`);
};

return (
        <div>
            <Link to="/dogs"><button className="homeBtn"> Create Dog! </button></Link>
            <SearchBar/>
        <div className="allFilters">
            <div>
            <select className="filterAZ" onChange={e => handleSort(e)}>
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
            </select>
            </div>

            <div>
            <select className="filterPeso" onChange={e => handleWeight(e)}>
                <option value="min">Min weight</option>
                <option value="max">Max weight</option>
            </select>
            </div>

            <div>
                <select className="filterCreated" onChange={e => handleCreated(e)}>
                    <option value="all">All</option>
                    <option value="Created">Created</option>
                    <option value="api">Existent</option>
                </select>
            </div>
        </div>
            <div>
                <select className="selectTemperaments" onChange={e => handleTemperament(e)}>
                    <option  value='All'> All Temperaments</option>
                    {
                        temperamentos.map((e)=>(
                            <option value={e.name} key={e.id}>{e.name}</option>
                        ))
                    }
                </select>
            </div>

                <p><button className="reloadBtn" onClick={e=>{handleClick(e)}}>RELOAD</button></p>
                <Paginado dogsPerPage={dogsPerPage} allDogs={allDogs.length} paginado={paginado}/>
                <div className="cardsDog">
                    {
                    currentDogs && currentDogs.map(e => {
                            return (
                            <Card key ={e.id} id={e.id} name={e.name} weight_min={e.weight_min} weight_max={e.weight_max} image={e.image? e.image : e.image} temperament={e.temperament}/>
                        );
                    })
                    }
                </div>
        </div>
    );

};
