import "../../styles/Breadcrumb.css"
import PaginateContainer from "../../containers/PaginateContainer/PaginateContainer"
import { IoMenuSharp } from "react-icons/io5"

import { UseWindowSize } from "../../hooks/UseWindowSize"

export default function BreadcrumbComponent({ handleSort, handleWeight, handleCreated, handleTemperament, temperamentos,
    page, pageSize, setPage, totalCount, setInput, input, allDogs, isShowHamburger, children, setIsShowHamburger }) {

    const { width } = UseWindowSize()

    return (
        <>
            <div className={isShowHamburger === false ? "container_all_breadcrumb" : "container_all_breadcrumb_hamburger"}>
                {/*   ACA ES EL COMPONENTE MOBILE*/}
                {
                    width <= 992 && <button onClick={() => setIsShowHamburger(!isShowHamburger)} className="hamburger"><IoMenuSharp /></button>
                }
                {
                    width <= 992 && isShowHamburger === true && <div>
                        <div className="searchbar_burger">
                            {children}
                        </div>
                        <div className="bradcrumb_allfilter">
                            <select onChange={e => handleSort(e)}>
                                <option value="all">Sort by alphabetical</option>
                                <option value="asc">A - Z</option>
                                <option value="desc">Z - A</option>
                            </select>
                            <select onChange={e => handleWeight(e)}>
                                <option value="all">Sort by weight</option>
                                <option value="min">Min weight</option>
                                <option value="max">Max weight</option>
                            </select>
                            <select onChange={e => handleCreated(e)}>
                                <option value="all">Sort by created</option>
                                <option value="Created">Created</option>
                                <option value="api">Existent</option>
                            </select>
                            <select onChange={e => handleTemperament(e)}>
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
                }
                {/*   ACA ES EL COMPONENTE DEKSTOP*/}
                {
                    width > 992 && <div className="bradcrumb_allfilter">
                        <select onChange={e => handleSort(e)}>
                            <option value="all">Sort by alphabetical</option>
                            <option value="asc">A - Z</option>
                            <option value="desc">Z - A</option>
                        </select>
                        <select onChange={e => handleWeight(e)}>
                            <option value="all">Sort by weight</option>
                            <option value="min">Min weight</option>
                            <option value="max">Max weight</option>
                        </select>
                    </div>
                }

                {
                    totalCount.length > 0 &&
                    <PaginateContainer allDogs={allDogs} pageSize={pageSize} setInput={setInput} input={input} setPage={setPage} totalCount={totalCount.length} page={page} />
                }

                {
                    width > 992 && <div className="bradcrumb_allfilter">
                        <select onChange={e => handleCreated(e)}>
                            <option value="all">Sort by created</option>
                            <option value="Created">Created</option>
                            <option value="api">Existent</option>
                        </select>
                        <select onChange={e => handleTemperament(e)}>
                            <option value='All'>Sort by temperaments</option>
                            {
                                temperamentos.length > 0
                                    ? temperamentos.map((e) => (
                                        <option value={e.name} key={e.id}>{e.name}</option>
                                    )) : null
                            }
                        </select>
                    </div>
                }

            </div>
        </>
    )
}