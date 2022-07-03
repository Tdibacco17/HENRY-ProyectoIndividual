import React from "react";
import "../styles/Paginado.css";

export default function Paginado({dogsPerPage, allDogs, paginado}) {
    const pageNumbers = [];

    for (let i = 0; i <= Math.ceil(allDogs/dogsPerPage); i++) {
        pageNumbers.push(i + 1);
    };

    return (
        <nav className="paginado">
            <ul>
                {
                    pageNumbers && pageNumbers.map((number) => (
                        <li key={number}>
                            <a onClick={() => paginado(number)}>{number}</a>
                        </li>      
                    ))
                }
            </ul>
        </nav>
    );
};