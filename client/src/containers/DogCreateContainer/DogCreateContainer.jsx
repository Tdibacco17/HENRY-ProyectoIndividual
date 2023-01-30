import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postDog, getTemperaments } from "../../actions";
import DogCreateComponent from "../../components/DogCreateComponent/DogCreateComponent";

function validate(input) {
    let errors = {};
    const regexName = /^([a-zA-Z ]+)$/i;
    const regexImg = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/i;

    if (input.name && !regexName.test(input.name)) {
        errors.name = "The name can't include special characters or numbers";
    }
    if (!input.name) {
        errors.name = "Name is required";
    }
    if (input.height_min <= 0) {
        errors.height_min = "Insert a height min";
    }
    if (input.height_max <= 0) {
        errors.height_max = "Insert a height max";
    }
    if (input.weight_min <= 0) {
        errors.weight_min = "Insert a weight min";
    }
    if (input.weight_max <= 0) {
        errors.weight_max = "Insert a weight max";
    }
    if (input.image && !regexImg.test(input.image)) {
        errors.image = "Please, verify the URL";
    }
    if (input.year_min <= 0) {
        errors.year_min = "Insert a year min";
    }
    if (input.year_max <= 0) {
        errors.year_max = "Insert a year max";
    }
    if (parseInt(input.height_min) > parseInt(input.height_max)) {
        errors.height_min = "Impossible"
    }
    if (parseInt(input.weight_min) > parseInt(input.weight_max)) {
        errors.weight_min = "Impossible"
    }
    if (parseInt(input.year_min) > parseInt(input.year_max)) {
        errors.year_min = "Impossible"
    }
    if (parseInt(input.height_min) === parseInt(input.height_max)) {
        errors.height_min = "Min and Max number are the same"
    }
    if (parseInt(input.weight_min) === parseInt(input.weight_max)) {
        errors.weight_min = "Min and Max number are the same"
    }
    if (parseInt(input.year_min) === parseInt(input.year_max)) {
        errors.year_min = "Min and Max number are the same"
    }
    return errors;
};

export default function DogCreateContainer() {
    const dispatch = useDispatch();

    const history = useHistory();
    const [errors, setErrors] = useState({})
    const [sendData, setSendData] = useState(false)

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
        image: "",
    });

    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch]);

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));

    };

    function handleSelect(e) {
        if(e.target.value === "Select"){
            return
        }
        input.temperament.includes(e.target.value) ?
            alert("equal temperaments cannot be added") :
            setInput({
                ...input,
                temperament: [...input.temperament, e.target.value] //si quiero muchos ponerlo asi [...input.temperament,e.target.value]
            })
    }

    function handleDelete(e) {
        setInput({
            ...input,
            temperament: []
        });
    }


    function handleSubmit(e) {
        e.preventDefault();
        if (input.name !== "" && input.weight_min !== "" && input.weight_max !== "" &&
            input.height_min !== "" && input.height_max !== "" && input.year_min !== "" &&
            input.year_max !== "" && input.image !== "" && input.temperament.length !== 0) {

            dispatch(postDog(input));
            alert("DOG CREATED!");
            setInput({
                name: "",
                height_min: "",
                height_max: "",
                weight_min: "",
                weight_max: "",
                year_min: "",
                year_max: "",
                temperament: [],
                image: "",
            });
            history.push("/home");
        } else {
            setSendData(true)
            setTimeout(() => {
                setSendData(false)
            }, 5000)
            return
        }
    }

    function handleEnter(e) {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return <DogCreateComponent handleSubmit={handleSubmit} input={input} errors={errors} sendData={sendData} handleEnter={handleEnter}
        handleSelect={handleSelect} handleChange={handleChange} temps={temps} handleDelete={handleDelete} />
};
