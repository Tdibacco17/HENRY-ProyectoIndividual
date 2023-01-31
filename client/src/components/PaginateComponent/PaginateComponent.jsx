import React from "react";
import "../../styles/Paginado.css";
import { IoPlayForward, IoPlaySkipForward, IoPlayBack, IoPlaySkipBack } from "react-icons/io5";

export default function PaginateComponent({ totalCount, page, totalPages, firstPage, prevPage, nextPage, lastPage }) {

    return (
        <>
            < div className="breadcrumb_paginado" >
                <button disabled={page === 1 || page < 1} onClick={firstPage}><IoPlayBack /></button>
                <button disabled={page === 1 || page < 1} onClick={prevPage}><IoPlaySkipBack /></button>
                <h6> {page} / {totalPages}</h6>
                <button disabled={page === totalPages || page > totalPages} onClick={nextPage}><IoPlaySkipForward /></button>
                <button disabled={page === totalPages || page > totalPages} onClick={lastPage}><IoPlayForward /></button>
            </div >
        </>
    );
};

