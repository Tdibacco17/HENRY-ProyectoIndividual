import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogByName } from "../actions";
import "../styles/SearchBar.css";

export default function SearchBar(){

const dispatch = useDispatch();
const [name, setName] = useState("");

function handleInputChange(e){
    e.preventDefault();
    setName(e.target.value);
};

function handleSubmit(e){
    e.preventDefault();
    // dispatch(getDogByName(name));
    console.log(name);
    console.log(setName);
    if(name.length !== 0){
        dispatch(getDogByName(name))
    }else {
        alert('Please input a name to start the search')
        setName("");
    }
};


    return (
        <div className="inputBtn">
            <input 
                name="Enter"
                className="inputCss" 
                type="text" 
                placeholder="Search a dog..." 
                onChange={(e) => handleInputChange(e)}
            />
            <button className="searchBtn" type="submit" onClick={(e) => handleSubmit(e)}> Search </button>
        </div>
        
    )
};
