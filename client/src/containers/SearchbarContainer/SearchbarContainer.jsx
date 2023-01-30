import { useDispatch } from "react-redux";
import { getDogByName } from "../../actions";
import SearchBarComponent from "../../components/SearchbarComponent/SearchBarComponent";

export default function SearchBarContainer({ setPage, name, setName }) {

    const dispatch = useDispatch();

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (name.length !== 0) {
            dispatch(getDogByName(name.trim()));
            setPage(1);
        } else {
            alert('Please input a name to start the search')
        }
    };

    function handleEnter(e) {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return <SearchBarComponent name={name} handleEnter={handleEnter}
     handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
};
