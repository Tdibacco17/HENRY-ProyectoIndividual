import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";
import "../../styles/Filters.css";

import CardContainer from "../../containers/CardContainer/CardContainer";
import FooterContainer from "../../containers/FooterContainer/FooterContainer";
import SearchBarContainer from "../../containers/SearchbarContainer/SearchbarContainer";

import imageDogDefault from "../../img/DogDefault.jpg"
import PaginateContainer from "../../containers/PaginateContainer/PaginateContainer";

export default function HomeComponent({
    handleSort, handleWeight, handleCreated, handleTemperament, temperamentos, handleClick,
    page, pageSize, setPage, totalCount, setInput, input, allDogs, name, setName
}) {

    return (
        <div>
            <Link to="/dogs"><button className="homeBtn"> Create Dog! </button></Link>
            <SearchBarContainer setPage={setPage} name={name} setName={setName} />
            <div className="allFilters">
                <div>
                    <select className="filterAZ" onChange={e => handleSort(e)}>
                        <option value="asc">A - Z</option>
                        <option value="desc">Z - A</option>
                    </select>
                </div>

                <div>
                    <select className="filterPeso" onChange={e => handleWeight(e)}>
                        <option value="min">Min weight</option>
                        <option value="max">Max weight</option>
                    </select>
                </div>

                <div>
                    <select className="filterCreated" onChange={e => handleCreated(e)}>
                        <option value="all">All</option>
                        <option value="Created">Created</option>
                        <option value="api">Existent</option>
                    </select>
                </div>
            </div>
            <div>
                <select className="selectTemperaments" onChange={e => handleTemperament(e)}>
                    <option value='All'> All Temperaments</option>
                    {
                        temperamentos.length > 0
                            ? temperamentos.map((e) => (
                                <option value={e.name} key={e.id}>{e.name}</option>
                            )) : null
                    }
                </select>
            </div>

            <p><button className="reloadBtn" onClick={e => { handleClick(e) }}>RELOAD</button></p>

            {totalCount.length > 0 && <PaginateContainer allDogs={allDogs} pageSize={pageSize} setInput={setInput} input={input} setPage={setPage} totalCount={totalCount.length} page={page} />}

            <div className="contenedorCards">
                <div className="cardsDog">
                    {
                        totalCount.length > 0
                            ? totalCount.map(e => {
                                return (
                                    <CardContainer key={e.id} id={e.id} name={e.name} weight_min={e.weight_min} weight_max={e.weight_max} image={e.image ? e.image : imageDogDefault} temperament={e.temperament} />
                                );
                            }) : <small>Cargando...</small>
                    }
                </div>
            </div>
            <FooterContainer />
        </div>
    );

};
