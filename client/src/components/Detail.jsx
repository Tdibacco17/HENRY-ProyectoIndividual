import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogById } from "../actions";
import { useEffect } from "react";
import "../styles/Detail.css";

export default function Detail(props){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDogById(props.match.params.id));
    }, [props.match.params.id, dispatch]);

    const myDog = useSelector(state => state.detail);

    return (
        <div>
            <Link to="/home"><button className="detailBtn">Home</button></Link>
            {
                myDog.length > 0 ? 
                <div className="conjunto">
                    <img className="imgPick" src={myDog[0].img? myDog[0].img : myDog[0].image} alt="Dog"/>
                    <div className="detailBody">
                        <h1>{myDog[0].name}</h1>
                        <h4>Termperaments: {myDog[0].temperament}</h4>
                        <h4>Height min: {myDog[0].height_min}</h4>
                        <h4>Height max: {myDog[0].height_max}</h4>
                        <h4>Weight min: {myDog[0].weight_min}Kg</h4>
                        <h4>Weight max: {myDog[0].weight_max}Kg</h4>
                        <h4>Life span min: {myDog[0].year_min} age</h4>
                        <h4>Life span max: {myDog[0].year_max} age</h4>
                    </div>
                </div> : <p>Loading..</p>
            }
        </div>
    )
}
//flexbox
//space-between o arround