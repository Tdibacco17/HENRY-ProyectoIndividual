import "../../styles/Breadcrumb.css"
import PaginateContainer from "../../containers/PaginateContainer/PaginateContainer"

export default function BreadcrumbComponent({ handleSort, handleWeight, handleCreated, handleTemperament, temperamentos,
    page, pageSize, setPage, totalCount, setInput, input, allDogs }) {

    return (
        <div className="container_all_breadcrumb">

            <div className="bradcrumb_allfilter">
                <select className="bradcrumb_filterAZ" onChange={e => handleSort(e)}>
                    <option value="all">Sort by alphabetical</option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                </select>
                <select className="bradcrumb_filterPeso" onChange={e => handleWeight(e)}>
                    <option value="all">Sort by weight</option>
                    <option value="min">Min weight</option>
                    <option value="max">Max weight</option>
                </select>
            </div>

            {
                totalCount.length > 0 &&
                <PaginateContainer allDogs={allDogs} pageSize={pageSize} setInput={setInput} input={input} setPage={setPage} totalCount={totalCount.length} page={page} />
            }

            <div className="bradcrumb_allfilter">
                <select className="bradcrumb_filterCreated" onChange={e => handleCreated(e)}>
                    <option value="all">Sort by created</option>
                    <option value="Created">Created</option>
                    <option value="api">Existent</option>
                </select>
                <select className="bradcrumb_temperaments" onChange={e => handleTemperament(e)}>
                    <option value='All'>Sort by temperaments</option>
                    {
                        temperamentos.length > 0
                            ? temperamentos.map((e) => (
                                <option value={e.name} key={e.id}>{e.name}</option>
                            )) : null
                    }
                </select>
            </div>

        </div>
    )
}