import React from "react";
import "../../styles/SearchBar.css";

export default function SearchBarComponent({handleInputChange, handleSubmit, name, handleEnter}){

    return (
        <div className="inputBtn">
            <input 
                name="Enter"
                value={name}
                className="inputCss" 
                type="text" 
                placeholder="Search a dog..." 
                onChange={(e) => handleInputChange(e)}
                onKeyPress={handleEnter}
            />
            <button className="searchBtn" type="submit" onClick={(e) => handleSubmit(e)}> Search </button>
        </div>
        
    )
};
