import React from "react";
import "../../styles/SearchBar.css";
import { IoSearchSharp, IoReload } from "react-icons/io5"
import { UseWindowSize } from "../../hooks/UseWindowSize"

export default function SearchBarComponent({ handleInputChange, handleSubmit, name, handleEnter, handleClick }) {

    const { width } = UseWindowSize()

    return (
        <>
                < div className="navbar_center" >
                    <div className="container_all_searchbar">
                        <input
                            name="Enter"
                            value={name}
                            className="inputCss"
                            type="text"
                            placeholder="SEARCH A DOG..."
                            onChange={(e) => handleInputChange(e)}
                            onKeyPress={handleEnter}
                        />
                        <button type="submit" onClick={(e) => handleSubmit(e)}><IoSearchSharp className="cotainer_icon_searchbar"/> </button>
                    </div>
                    <button className="navbar_center_btn" onClick={(e) => handleClick(e)}><IoReload className="cotainer_icon_searchbar"/> <small>RELOAD</small></button>
                </div >
        </>
    )
};