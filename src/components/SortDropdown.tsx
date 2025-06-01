import React, { useState } from "react";
import "../styles/components/SortDropdown.css";
import downArrow from "../assets/down.png";
import { SortDropdownProps } from "../utils/types";
const SortDropdown: React.FC<SortDropdownProps> = ({
  setSortField,
  setSortType,
  sortField,
  sortType,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleDropdown = () => {
    setShowMenu(!showMenu);
  };
  const handleSortField = (field: string) => {
    setSortField(field);
  };
  const handleSortType = (type: "asc" | "desc") => {
    setSortType(type);
  };
  return (
    <div className={`dropdown`}>
      <button className="sort-button" onClick={toggleDropdown}>
        Sort by: {sortField.toUpperCase()}{" "}
        <img src={downArrow} className="sort-downArrow" alt="▼" />
      </button>

      <div className={`dropdown-content ${showMenu ? "show" : ""}`}>
        <div className={`dropdown-item ${"name" === sortField ? "selected" : ""}`} onClick={() => handleSortField("name")}>
          {" "}
       
          Name
        </div>
        <div className={`dropdown-item ${"forks" === sortField ? "selected" : ""}`} onClick={() => handleSortField("forks")}>
          <span
           
          ></span>
          Forks
        </div>
        <div className={`dropdown-item ${"stars" === sortField ? "selected" : ""}`} onClick={() => handleSortField("stars")}>
        
          Stars
        </div>
        <div className="divider" > </div>
        <div className={`dropdown-item ${"asc" === sortType ? "selected" : ""}`} onClick={() => handleSortType("asc")}>
       
          Ascending
        </div>
        <div className={`dropdown-item ${"desc" === sortType ? "selected" : ""}`} onClick={() => handleSortType("desc")}>
     
          Descending
        </div>
      </div>
    </div>
  );
};

export default SortDropdown;
