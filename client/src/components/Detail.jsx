import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogById } from "../actions";
import { useEffect } from "react";
import { deleteDog } from "../actions";
import Footer from "./Footer";
import "../styles/Detail.css";


export default function Detail(props){
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getDogById(props.match.params.id));
    }, [props.match.params.id, dispatch]);

    const myDog = useSelector(state => state.detail);

    function handleClick(e){
        dispatch(deleteDog(props.match.params.id));
        alert('Dog Deleted');
        history.push("/home");
    }   

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
                        <h4>Weight min: {myDog[0].weight_min}kg</h4>
                        <h4>Weight max: {myDog[0].weight_max}kg</h4>
                        <h4>Life span min: {myDog[0].year_min} age</h4>
                        <h4>Life span max: {myDog[0].year_max} age</h4>
                        {
                            myDog[0].createdInDb && <button className="deleteBtn" onClick={e => handleClick(e)}>X</button>
                        }
                    </div>
                </div> : <p>Loading..</p>
            }
            <Footer/>
        </div>
    )
}
