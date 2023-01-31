import React from "react";
import "../../styles/Paginado.css";
import { IoPlayForward, IoPlaySkipForward, IoPlayBack, IoPlaySkipBack } from "react-icons/io5";

export default function PaginateComponent({ allDogs, page, totalPages, firstPage, prevPage, nextPage, lastPage }) {

    return (
        <>
            {
                allDogs > 0 ?
                    < div className="breadcrumb_paginado" >
                        <button disabled={page === 1 || page < 1} onClick={firstPage}><IoPlayBack /></button>
                        <button disabled={page === 1 || page < 1} onClick={prevPage}><IoPlaySkipBack /></button>
                        <h6> {page} / {totalPages}</h6>
                        <button disabled={page === totalPages || page > totalPages} onClick={nextPage}><IoPlaySkipForward /></button>
                        <button disabled={page === totalPages || page > totalPages} onClick={lastPage}><IoPlayForward /></button>
                    </div >
                    : < div className="breadcrumb_paginado" >
                        <button disabled={true} ><IoPlayBack /></button>
                        <button disabled={true} ><IoPlaySkipBack /></button>
                        <h6> 1 / ... </h6>
                        <button disabled={true} ><IoPlaySkipForward /></button>
                        <button disabled={true} ><IoPlayForward /></button>
                    </div >
            }
        </>
    );
};

