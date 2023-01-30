import { Link } from "react-router-dom";
import FooterContainer from "../../containers/FooterContainer/FooterContainer";
import "../../styles/DogCreate.css";

export default function DogCreateComponent({ handleSubmit, input, errors, handleSelect, handleChange,
    temps, handleDelete, sendData, handleEnter }) {

    return (
        <div>
            <Link to="/home"><button className="dogBackBtn"> Back </button></Link>

            <div className="contenedor">
                <h3>Create Dog!</h3>

                {sendData === true && <p className="spanError">Completar todos los campos</p>}

                <form onSubmit={e => handleSubmit(e)}>
                    <div className="nameLabelNameBtn">
                        <label className="nameLabel">Name:</label>
                        <input
                            className="inputCreate"
                            type="text"
                            value={input.name}
                            name="name"
                            onChange={e => handleChange(e)}
                            onKeyPress={handleEnter}
                        />
                    </div>
                    {errors.name && input.name.length > 0 && (<p className="spanError">{errors.name}</p>)}
                    <div className="nameLabelNameBtn">
                        <label className="nameLabel">Height min:</label>
                        <input
                            className="inputCreate"
                            type="number"
                            value={input.height_min}
                            name="height_min"
                            onChange={e => handleChange(e)}
                            placeholder="Number"
                            onKeyPress={handleEnter}
                        />
                    </div>
                    {errors.height_min && input.height_min.length > 0 && (<p className="spanError">{errors.height_min}</p>)}
                    <div className="nameLabelNameBtn">
                        <label className="nameLabel">Height max:</label>
                        <input
                            className="inputCreate"
                            type="number"
                            value={input.height_max}
                            name="height_max"
                            onChange={e => handleChange(e)}
                            placeholder="Number"
                            onKeyPress={handleEnter}
                        />
                    </div>
                    {errors.height_max && input.height_max.length > 0 && (<p className="spanError">{errors.height_max}</p>)}
                    <div className="nameLabelNameBtn">
                        <label className="nameLabel">Weight min:</label>
                        <input
                            className="inputCreate"
                            type="number"
                            value={input.weight_min}
                            name="weight_min"
                            onChange={e => handleChange(e)}
                            placeholder="Number"
                            onKeyPress={handleEnter}
                        />
                    </div>
                    {errors.weight_min && input.weight_min.length > 0 && (<p className="spanError">{errors.weight_min}</p>)}
                    <div className="nameLabelNameBtn">
                        <label className="nameLabel">Weight max:</label>
                        <input
                            className="inputCreate"
                            type="number"
                            value={input.weight_max}
                            name="weight_max"
                            onChange={e => handleChange(e)}
                            placeholder="Number"
                            onKeyPress={handleEnter}
                        />
                    </div>
                    {errors.weight_max && input.weight_max.length > 0 && (<p className="spanError">{errors.weight_max}</p>)}
                    <div className="nameLabelNameBtn">
                        <label className="nameLabel">Life span min:</label>
                        <input
                            className="inputCreate"
                            type="number"
                            value={input.year_min}
                            name="year_min"
                            onChange={e => handleChange(e)}
                            placeholder="Number"
                            onKeyPress={handleEnter}
                        />
                    </div>
                    {errors.year_min && input.year_min.length > 0 && (<p className="spanError">{errors.year_min}</p>)}
                    <div className="nameLabelNameBtn">
                        <label className="nameLabel">Life span max:</label>
                        <input
                            className="inputCreate"
                            type="number"
                            value={input.year_max}
                            name="year_max"
                            onChange={e => handleChange(e)}
                            placeholder="Number"
                            onKeyPress={handleEnter}
                        />
                    </div>
                    {errors.year_max && input.year_max.length > 0 && (<p className="spanError">{errors.year_max}</p>)}
                    <div className="nameLabelNameBtn">
                        <label className="nameLabel">Image URL:</label>
                        <input
                            className="inputCreate"
                            type="text"
                            value={input.image}
                            name="image"
                            onChange={e => handleChange(e)}
                            onKeyPress={handleEnter}
                        />
                    </div>
                    {errors.image && input.image.length > 0 && <p className="spanError">{errors.image}</p>}
                    <div className="nameLabelNameBtn">
                        <label className="nameLabelTemperament">Temperaments:</label>
                        <select className="inputCreateTemperament" onChange={e => handleSelect(e)} >
                            <option>Select</option>
                            {
                                temps.length > 0
                                    ? temps.map(el => (
                                        <option key={el.id} value={el.name}>{el.name}</option>
                                    )) : null
                            }
                        </select>
                        <button className="buttonCleanTemperament" type="button" onClick={e => handleDelete(e)}>Clean</button>
                    </div>
                    {
                        input.temperament.length !== 0 &&
                        <ul className="centradoUl"><li className="listTemps">{input.temperament.map(e => e + ", ")}</li></ul>
                    }

                    <button className="dogCreateBtn" type="submit">Created Dog!</button>
                </form>
            </div>
            <FooterContainer />
        </div>
    );
};
