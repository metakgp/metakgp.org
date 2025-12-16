import "../styles/components/SortDropdown.css";
import { SortDropdownProps } from "../utils/types";
import { FaArrowDownShortWide, FaArrowDownWideShort } from "react-icons/fa6";
const SortDropdown: React.FC<SortDropdownProps> = ({
  setSortField,
  setSortType,
  sortField,
  sortType,
}) => {
  const toggleSort = () => {
    setSortType(sortType === "desc" ? "asc" : "desc");
  }

  const handleSortChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    e.preventDefault();
    setSortField(e.target.value);
  }

  return (
    <div className="dropdown">
      <div className="sort-container">
        <label htmlFor="sort-select">Sort by:</label>

        <select className="sort-select" onChange={handleSortChange} value={sortField}>
          <option value="name">Name</option>
          <option value="forks">Forks</option>
          <option value="stars">Stars</option>
          {/* <option value="activity">Activity</option> */}
        </select>
      </div>

      <div className="sort-Arrow-container" onClick={toggleSort}>
        {sortType === "asc" ? <><FaArrowDownShortWide /> Ascending</> : <><FaArrowDownWideShort /> Descending</>}
      </div>
    </div>
  );
};

export default SortDropdown;
