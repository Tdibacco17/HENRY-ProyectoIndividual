import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Detail.css";
import FooterContainer from "../../containers/FooterContainer/FooterContainer";
import NavbarContainer from "../../containers/NavbarContainer/NavbarContainer";


export default function DetailComponent({ myDog, handleClick }) {

    return (
        <div>
            <NavbarContainer />
            <Link to="/home"><button className="detailBtn">Home</button></Link>
            {
                myDog.length > 0 ?
                    <div className="conjunto">
                        <img className="imgPick" src={myDog[0].img ? myDog[0].img : myDog[0].image} alt="Dog" />
                        <div className="detailBody">
                            <h1>{myDog[0].name}</h1>
                            <h4>Termperaments: {myDog[0].temperament}</h4>
                            <h4>Height min: {myDog[0].height_min}</h4>
                            <h4>Height max: {myDog[0].height_max}</h4>
                            <h4>Weight min: {myDog[0].weight_min}kg</h4>
                            <h4>Weight max: {myDog[0].weight_max}kg</h4>
                            <h4>Life span min: {myDog[0].year_min} age</h4>
                            <h4>Life span max: {myDog[0].year_max} age</h4>
                            {
                                myDog[0].createdInDb && <button className="deleteBtn" onClick={e => handleClick(e)}>X</button>
                            }
                        </div>
                    </div> : <p>Cargando..</p>
            }
            <FooterContainer />
        </div>
    )
}
