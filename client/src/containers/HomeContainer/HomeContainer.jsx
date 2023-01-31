import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, getTemperaments } from "../../actions";

import HomeComponent from "../../components/HomeComponent/HomeComponent";
import { UseWindowSize } from "../../hooks/UseWindowSize";

export default function HomeContainer() {

    const dispatch = useDispatch();

    const { width } = UseWindowSize()



    const [isShowHamburger, setIsShowHamburger] = useState(false)

    useEffect(() => {
        if (width > 999) {
            setIsShowHamburger(false)
            return
        }
    }, [width])

    //searchbar
    const [name, setName] = useState("");
    // eslint-disable-next-line

    const allDogs = useSelector((state) => state.dogs);
    const temperamentos = useSelector((state) => state.temperaments);

    const [page, setPage] = useState(1);
    const [pageSize] = useState(12);
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

    return <HomeComponent temperamentos={temperamentos} handleClick={handleClick} name={name}
        setName={setName} setIsShowHamburger={setIsShowHamburger} isShowHamburger={isShowHamburger}
        pageSize={pageSize} setInput={setInput} input={input} setPage={setPage} allDogs={allDogs.length} totalCount={currentPage} page={page} />
};
