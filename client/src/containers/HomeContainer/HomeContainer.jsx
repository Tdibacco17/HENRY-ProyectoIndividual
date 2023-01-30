import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, getTemperaments } from "../../actions";

import HomeComponent from "../../components/HomeComponent/HomeComponent";

export default function HomeContainer() {

    const dispatch = useDispatch();

    //searchbar
    const [name, setName] = useState("");
    // eslint-disable-next-line

    const allDogs = useSelector((state) => state.dogs);
    const temperamentos = useSelector((state) => state.temperaments);

    const [page, setPage] = useState(1);
    const [pageSize] = useState(8);
    const [input, setInput] = useState(1);
    let lastCard = page * pageSize;
    let firstCard = lastCard - pageSize
    let currentPage = allDogs.slice(firstCard, lastCard);

    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(getTemperaments());
        // eslint-disable-next-line
    }, [])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getAllDogs());
        setPage(1)
        setName("")
    };

    return <HomeComponent temperamentos={temperamentos} handleClick={handleClick} name={name} setName={setName}
        pageSize={pageSize} setInput={setInput} input={input} setPage={setPage} allDogs={allDogs.length} totalCount={currentPage} page={page} />
};
