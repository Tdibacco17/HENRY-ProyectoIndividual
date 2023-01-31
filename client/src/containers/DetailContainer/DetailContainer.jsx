import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogById } from "../../actions";
import { useEffect } from "react";
import { deleteDog } from "../../actions";
import "../../styles/Detail.css";
import DetailComponent from "../../components/DetailComponent/DetailComponent";

export default function DetailContainer(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const myDog = useSelector(state => state.detail);

    useEffect(() => {
        dispatch(getDogById(props.match.params.id));
    }, [props.match.params.id, dispatch]);


    function handleClick(e) {
        dispatch(deleteDog(props.match.params.id));
        alert('DOG DELETED!');
        history.push("/home");
    }

    return <DetailComponent myDog={myDog} handleClick={handleClick}/>
}
