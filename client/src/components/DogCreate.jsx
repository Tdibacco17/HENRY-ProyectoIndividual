import React, { useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link, useHistory} from "react-router-dom";
import { postDog, getTemperaments} from "../actions";
import "../styles/DogCreate.css";

function validate(input){
    let errors = {};
    if(!input.name){
        errors.name = "Name is required";
    }
    if(input.height_min <= 0){
        errors.height_min = "Insert a height min";
    }
    if(input.weight_min <= 0){
        errors.weight_min = "Insert a weight min";
    }
    return errors;
};

export default function DogCreate() {
const dispatch = useDispatch();
const history = useHistory();
const [errors, setErrors] = useState({})

const temps = useSelector(state => state.temperaments);

const [input, setInput] = useState({
    name: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    year_min: "",
    year_max: "",
    temperament: [],
    image:"",
});

useEffect(()=> {
    dispatch(getTemperaments());
}, [dispatch]);

function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    });
    setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
    }));
    console.log(input)
};

function handleSelect(e){
    setInput({
        ...input,
        temperament: [...input.temperament, e.target.value] //si quiero muchos ponerlo asi [...input.temperament,e.target.value]
    });
    console.log(input)
}

function handleDelete(e){
    setInput({
        ...input,
        temperament: [] 
    });
    console.log(input)
}

function handleSubmit(e){
    e.preventDefault();
    console.log(input)
    dispatch(postDog(input));
    alert("CREATED DOG!");
    setInput({
    name: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    year_min: "",
    year_max: "",
    temperament: [],
    image:"",
    });
    history.push("/home");
}

    return (
        <div>
            <Link to="/home"><button className="dogBackBtn"> Back </button></Link>
            <h3>Crea tu Dog!</h3>
            
            <form onSubmit={e => handleSubmit(e)}>
                <div className="nameLabelNameBtn">
                    <label className="nameLabel">Name:</label>
                    <input 
                    className="inputCreate"
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={e =>handleChange(e)}
                    />
                        {errors.name && (
                            <p className="spanError">{errors.name}</p>
                        )}
                </div>
                <div className="nameLabelNameBtn">
                    <label className="nameLabel">Height min:</label>
                    <input 
                    className="inputCreate"
                    type="number"
                    value={input.height_min}
                    name="height_min"
                    onChange={e =>handleChange(e)}
                    />
                     {errors.height_min && (
                            <p className="spanError">{errors.height_min}</p>
                        )}
                </div>
                <div className="nameLabelNameBtn">
                    <label className="nameLabel">Height max:</label>
                    <input 
                    className="inputCreate"
                    type="number"
                    value={input.height_max}
                    name="height_max"
                    onChange={e =>handleChange(e)}
                    />
                </div>
                <div className="nameLabelNameBtn">
                    <label className="nameLabel">Weight min:</label>
                    <input 
                    className="inputCreate"
                    type="number"
                    value={input.weight_min}
                    name="weight_min"
                    onChange={e =>handleChange(e)}
                    />
                        {errors.weight_min && (
                            <p className="spanError">{errors.weight_min}</p>
                        )}
                </div>
                <div className="nameLabelNameBtn">
                    <label className="nameLabel">Weight max:</label>
                    <input 
                    className="inputCreate"
                    type="number"
                    value={input.weight_max}
                    name="weight_max"
                    onChange={e =>handleChange(e)}
                    />
                </div>
                <div className="nameLabelNameBtn">
                    <label className="nameLabel">Life span min:</label>
                    <input 
                    className="inputCreate"
                    type="number"
                    value={input.year_min}
                    name="year_min"
                    onChange={e =>handleChange(e)}
                    />
                </div>
                <div className="nameLabelNameBtn">
                    <label className="nameLabel">Life span max:</label>
                    <input 
                    className="inputCreate"
                    type="number"
                    value={input.year_max}
                    name="year_max"
                    onChange={e =>handleChange(e)}
                    />
                </div>
                <div className="nameLabelNameBtn">
                    <label className="nameLabel">Image:</label>
                    <input 
                    className="inputCreate"
                    type="text"
                    value={input.image}
                    name="image"
                    onChange={e =>handleChange(e)}
                    />
                </div>
                <div className="nameLabelNameBtn">
                    <label className="nameLabelTemperament">Temperaments:</label>
                    <select className="inputCreateTemperament" onChange={e =>handleSelect(e)}>
                        <option></option>
                        {
                            temps.map(el => (
                                <option key={el.id} value={el.name}>{el.name}</option>
                            ))
                        }
                    </select>
                    <button className="buttonCleanTemperament" type="button" onClick={e =>handleDelete(e)}>Clean</button>
                </div>
        
                <div className="nameLabelNameBtn">
                    { 
                        input.temperament.length !== 0 &&
                        <ul><li className="listTemps">{input.temperament.map(e => e + ", ")}</li></ul>
                    }
                </div>
                    { 
                        input.name.length !== 0 && input.weight_min.length !== 0 && input.height_min.length !== 0 &&
                        // input.weight_min < input.weight_max &&
                        <button className="dogCreateBtn" type="submit" > Created Dog!</button>
                        
                    }
            </form>
        </div>
    );
};
