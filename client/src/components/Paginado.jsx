import React from "react";
import "../styles/Paginado.css";

export default function Paginado({dogsPerPage, allDogs, paginado}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
        pageNumbers.push(i);
    };

    return (
        <nav>
            {pageNumbers.length > 0 ?
            <div className="contenedorPaginado">
            <ul className="paginado">
                {
                    pageNumbers && pageNumbers.map((number) => (
                        <li key={number} onClick={() => paginado(number)}>
                            <div >{number}</div>
                        </li>      
                    ))
                }
            </ul>
            </div> : <p className="loading">Loading...</p>
            } 
        </nav>
    );
};

