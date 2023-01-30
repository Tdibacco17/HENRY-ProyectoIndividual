import React from "react";
import "../../styles/Home.css";
import "../../styles/Filters.css";

import CardContainer from "../../containers/CardContainer/CardContainer";
import FooterContainer from "../../containers/FooterContainer/FooterContainer";
import SearchBarContainer from "../../containers/SearchbarContainer/SearchbarContainer";

import imageDogDefault from "../../img/DogDefault.jpg"
import NavbarContainer from "../../containers/NavbarContainer/NavbarContainer";
import BreadcrumbContainer from "../../containers/BreadcrumbContainer/BreadcrumbContainer";

export default function HomeComponent({ temperamentos, handleClick, page, pageSize, setPage,
    totalCount, setInput, input, allDogs, name, setName }) {

    return (
        <div className="container_all_home">
            <NavbarContainer>
                <SearchBarContainer handleClick={handleClick} setPage={setPage} name={name} setName={setName} />
            </NavbarContainer>
            <BreadcrumbContainer setPage={setPage} totalCount={totalCount} temperamentos={temperamentos}
                pageSize={pageSize} setInput={setInput} input={input} allDogs={allDogs} page={page} />
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
