import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, getTemperaments, filterTemperaments, filterCreated, orderByName, orderByWeight } from "../../actions";

import HomeComponent from "../../components/HomeComponent/HomeComponent";

export default function HomeContainer() {

    const dispatch = useDispatch();

    //searchbar
    const [name, setName] = useState("");
    // eslint-disable-next-line
    const [order, setOrder] = useState("");
    // eslint-disable-next-line
    const [order2, setOrder2] = useState("");

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
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getAllDogs());
        setPage(1)
        setName("")
    };

    function handleTemperament(e) {
        e.preventDefault();
        dispatch(filterTemperaments(e.target.value));
        setPage(1)
    };

    function handleCreated(e) {
        e.preventDefault();
        dispatch(filterCreated(e.target.value));
        setPage(1)
    };

    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setPage(1)
        setOrder(`Ordenado ${e.target.value}`);
    };

    function handleWeight(e) {
        e.preventDefault();
        dispatch(orderByWeight(e.target.value));
        setPage(1)
        setOrder2(`Ordenado ${e.target.value}`);
    };

    return <HomeComponent handleSort={handleSort} handleWeight={handleWeight} handleCreated={handleCreated}
        handleTemperament={handleTemperament} temperamentos={temperamentos} handleClick={handleClick} name={name} setName={setName}
        pageSize={pageSize} setInput={setInput} input={input} setPage={setPage} allDogs={allDogs.length} totalCount={currentPage} page={page} />
};
