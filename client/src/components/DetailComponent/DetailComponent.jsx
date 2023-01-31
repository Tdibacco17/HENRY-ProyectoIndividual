import React from "react";
import "../../styles/Detail.css";
import FooterContainer from "../../containers/FooterContainer/FooterContainer";
import NavbarContainer from "../../containers/NavbarContainer/NavbarContainer";
import { IoCloseSharp } from "react-icons/io5";

export default function DetailComponent({ myDog, handleClick }) {

    return (
        <div className="container_details">
            <NavbarContainer />
            {
                myDog.length > 0 ?
                    <div className="card_detail">
                        <img src={myDog[0].img ? myDog[0].img : myDog[0].image} alt="Dog" />
                        <div className="detailBody">
                            <div className="info_body">
                                <h1>{myDog[0].name}</h1>
                                <h4>TEMPERAMENTS: {myDog[0].temperament} </h4>
                                <h4>HEIGHT MIN: {myDog[0].height_min}</h4>
                                <h4>HEIGHT MAX: {myDog[0].height_max}</h4>
                                <h4>WEIGHT MIN: {myDog[0].weight_min}kg</h4>
                                <h4>WEIGHT MAX: {myDog[0].weight_max}kg</h4>
                                <h4>LIFE SPAN MIN: {myDog[0].year_min} age</h4>
                                <h4>LIFE SPAN MAX: {myDog[0].year_max} age</h4>
                            </div>
                            <div className="info_btn">
                                {
                                    myDog[0].createdInDb && <button onClick={e => handleClick(e)}>
                                        <IoCloseSharp size={32} />
                                    </button>
                                }
                            </div>
                        </div>
                    </div> : <strong>CARGANDO..</strong>
            }
            <FooterContainer />
        </div>
    )
}
