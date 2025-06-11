import React, { useState } from "react";
import "../styles/components/SortDropdown.css";
import downArrow from "../assets/down.png";
import upArrow from "../assets/up-arrow.png";
import { SortDropdownProps } from "../utils/types";
const SortDropdown: React.FC<SortDropdownProps> = ({
  setSortField,
  setSortType,
  sortField,
  sortType,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleSort = () => {
    setSortType(sortType === "desc" ? "asc" : "desc");
  }
  const toggleDropdown = () => {
    setShowMenu(!showMenu);
  };
  const handleSortField = (field: string) => {
    setSortField(field);
  };
  
  return (
    <div className={`dropdown ${showMenu ? "show" : ""}`}>
      <div className="sort-button">
   <button disabled={window.innerWidth >= 760} onClick={toggleDropdown}>
        Sort by:{" "}{sortField.charAt(0).toUpperCase()+sortField.slice(1)}
        </button>
        <div className="sort-Arrow-container" onClick={(e) => {
      e.stopPropagation(); 
      toggleSort();
    }}>
 <img src={sortType === "desc" ? downArrow : upArrow} className="sort-Arrow"   alt="▼" />
     
        </div>
   
      </div>
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
     
      </div>
    </div>
  );
};

export default SortDropdown;
