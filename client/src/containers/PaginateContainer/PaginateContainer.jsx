import React from "react";
import PaginateComponent from "../../components/PaginateComponent/PaginateComponent";

export default function PaginateContainer({ allDogs, page, pageSize, setPage, setInput, input }) {


    const totalPages = Math.ceil(allDogs / pageSize);

    const prevPage = () => {
        setInput(input - 1)
        setPage(page - 1)
    }

    const nextPage = () => {
        setInput(input + 1)
        setPage(page + 1)
    }

    const firstPage = () => {
        setInput(1);
        setPage(1);
    }

    const lastPage = () => {
        setInput(totalPages);
        setPage(totalPages);
    }

    return <PaginateComponent prevPage={prevPage} nextPage={nextPage} firstPage={firstPage} lastPage={lastPage} totalPages={totalPages} page={page} />
};

