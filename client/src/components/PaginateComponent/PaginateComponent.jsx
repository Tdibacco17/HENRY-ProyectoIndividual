import React from "react";
import "../../styles/Paginado.css";

export default function PaginateComponent({ page, totalPages, firstPage, prevPage, nextPage, lastPage }) {

    return (
        <div className='Paginado'>
            <button disabled={page === 1 || page < 1} onClick={firstPage}>First</button>
            <button disabled={page === 1 || page < 1} onClick={prevPage}>Prev</button>
            <h6> {page} / {totalPages}</h6>
            <button disabled={page === totalPages || page > totalPages} onClick={nextPage}>Next</button>
            <button disabled={page === totalPages || page > totalPages} onClick={lastPage}>Last</button>
        </div>
    );
};

