import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogByName } from "../actions";
import "../styles/SearchBar.css";

export default function SearchBar({setCurrentPage}){

const dispatch = useDispatch();
const [name, setName] = useState("");


function handleInputChange(e){
    e.preventDefault();
    setName(e.target.value);
};

function handleSubmit(e){
    e.preventDefault();
    if(name.length !== 0){
        dispatch(getDogByName(name));
        setName({
            Enter: ""
        });
        setCurrentPage(1);
    }else {
        alert('Please input a name to start the search')
    }
};


    return (
        <div className="inputBtn">
            <input 
                name="Enter"
                value={name.Enter}
                className="inputCss" 
                type="text" 
                placeholder="Search a dog..." 
                onChange={(e) => handleInputChange(e)}
            />
            <button className="searchBtn" type="submit" onClick={(e) => handleSubmit(e)}> Search </button>
        </div>
        
    )
};
