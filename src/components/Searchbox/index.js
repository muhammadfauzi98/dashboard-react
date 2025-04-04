
// plugin import
import { FaSearch } from "react-icons/fa";

const searchbox = () => {
    return (
        <div className="searchBox position-relative d-flex align-items-center">
            <FaSearch className="mr-2"/>
            <input type="text" placeholder="Search..." />
        </div>
    );
}

export default searchbox;