import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import BreadcrumbComponent from "../../components/BreadcrumbComponent/BreadcrumbComponent";
import { getAllDogs, filterTemperaments, filterCreated, orderByName, orderByWeight } from "../../actions/index";

export default function BreadcrumbContainer({ children, isShowHamburger, setIsShowHamburger, setPage, totalCount, temperamentos, pageSize, setInput, input, allDogs, page }) {

    const dispatch = useDispatch();

    //searchbar
    const [name, setName] = useState("");

    // eslint-disable-next-line
    const [order, setOrder] = useState("");
    // eslint-disable-next-line
    const [order2, setOrder2] = useState("");

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
        if (e.target.value === "All") {
            dispatch(getAllDogs());
        } else {
            dispatch(orderByName(e.target.value));
            setPage(1)
            setOrder(`Ordenado ${e.target.value}`);
        }

    };

    function handleWeight(e) {
        e.preventDefault();
        if (e.target.value === "All") {
            dispatch(getAllDogs());
        } else {
            dispatch(orderByWeight(e.target.value));
            setPage(1)
            setOrder2(`Ordenado ${e.target.value}`);
        }
    };

    return <BreadcrumbComponent handleSort={handleSort} handleWeight={handleWeight} handleCreated={handleCreated} isShowHamburger={isShowHamburger}
        handleTemperament={handleTemperament} temperamentos={temperamentos} handleClick={handleClick} name={name} setName={setName} children={children}
        pageSize={pageSize} setInput={setInput} input={input} setPage={setPage} allDogs={allDogs} totalCount={totalCount} page={page}
        setIsShowHamburger={setIsShowHamburger} />
}