
import FooterContainer from "../../containers/FooterContainer/FooterContainer";
import NavbarContainer from "../../containers/NavbarContainer/NavbarContainer";
import "../../styles/DogCreate.css";

export default function DogCreateComponent({ handleSubmit, input, errors, handleSelect, handleChange,
    temps, handleDelete, sendData, handleEnter }) {

    return (
        <div className="container_all_form">
            <NavbarContainer />

            <div className="contenedor">
                <h2>CREATE DOG!</h2>

                {sendData === true && <small>Completar todos los campos</small>}

                <form onSubmit={e => handleSubmit(e)}>
                    <div className="container_form">

                        <div className="container_seccion">
                            <label>NAME</label>
                            <input
                                type="text"
                                value={input.name}
                                name="name"
                                placeholder="Only text"
                                onChange={e => handleChange(e)}
                                onKeyPress={handleEnter}
                            />
                        </div>
                        {errors.name && input.name.length > 0 && (<small>{errors.name}</small>)}

                        <div className="container_seccion">
                            <label>HEIGHT MIN</label>
                            <input
                                type="number"
                                value={input.height_min}
                                name="height_min"
                                onChange={e => handleChange(e)}
                                placeholder="Only numbers"
                                onKeyPress={handleEnter}
                            />
                        </div>
                        {errors.height_min && input.height_min.length > 0 && (<small>{errors.height_min}</small>)}
                        <div className="container_seccion">
                            <label>HEIGHT MAX</label>
                            <input
                                type="number"
                                value={input.height_max}
                                name="height_max"
                                onChange={e => handleChange(e)}
                                placeholder="Only numbers"
                                onKeyPress={handleEnter}
                            />
                        </div>
                        {errors.height_max && input.height_max.length > 0 && (<small>{errors.height_max}</small>)}
                        <div className="container_seccion">
                            <label>WEIGHT MIN</label>
                            <input
                                type="number"
                                value={input.weight_min}
                                name="weight_min"
                                onChange={e => handleChange(e)}
                                placeholder="Only numbers"
                                onKeyPress={handleEnter}
                            />
                        </div>
                        {errors.weight_min && input.weight_min.length > 0 && (<small>{errors.weight_min}</small>)}
                        <div className="container_seccion">
                            <label>WEIGHT MAX</label>
                            <input
                                type="number"
                                value={input.weight_max}
                                name="weight_max"
                                onChange={e => handleChange(e)}
                                placeholder="Only numbers"
                                onKeyPress={handleEnter}
                            />
                        </div>
                        {errors.weight_max && input.weight_max.length > 0 && (<small>{errors.weight_max}</small>)}
                        <div className="container_seccion">
                            <label>LIFE SPAN MIN</label>
                            <input
                                type="number"
                                value={input.year_min}
                                name="year_min"
                                onChange={e => handleChange(e)}
                                placeholder="Only numbers"
                                onKeyPress={handleEnter}
                            />
                        </div>
                        {errors.year_min && input.year_min.length > 0 && (<small>{errors.year_min}</small>)}
                        <div className="container_seccion">
                            <label>LIFE SPAN MAX</label>
                            <input
                                type="number"
                                value={input.year_max}
                                name="year_max"
                                onChange={e => handleChange(e)}
                                placeholder="Only numbers"
                                onKeyPress={handleEnter}
                            />
                        </div>
                        {errors.year_max && input.year_max.length > 0 && (<small>{errors.year_max}</small>)}
                        <div className="container_seccion">
                            <label>IMAGE URL</label>
                            <input
                                type="text"
                                value={input.image}
                                name="image"
                                onChange={e => handleChange(e)}
                                onKeyPress={handleEnter}
                            />
                        </div>
                        {errors.image && input.image.length > 0 && <small>{errors.image}</small>}

                        <div className="container_seccion">
                            <label>TEMPERAMENTS</label>
                            <select onChange={e => handleSelect(e)} >
                                <option>Select</option>
                                {
                                    temps.length > 0
                                        ? temps.map(el => (
                                            <option key={el.id} value={el.name}>{el.name}</option>
                                        )) : null
                                }
                            </select>
                        </div>
                        {
                            input.temperament.length !== 0 &&
                            <>
                                <ul>
                                    <li >{input.temperament.map(e => e + ", ")}</li>
                                </ul>
                                <button className="btm_clean" type="button" onClick={e => handleDelete(e)}>CLEAN TEMPERAMENTS</button>
                            </>
                        }

                        <button className="btn_create" type="submit"><h3>SAVE AND CREATE DOG!</h3></button>
                    </div>
                </form>
            </div>
            <FooterContainer />
        </div>
    );
};
