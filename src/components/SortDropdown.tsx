import React, { useState } from "react";
import "../styles/components/SortDropdown.css";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
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
      <div className="sort-container">
        <button disabled={window.innerWidth >= 1200} onClick={toggleDropdown} >
        Sort by:{" "}{sortField.charAt(0).toUpperCase()+sortField.slice(1)}
        </button>
       
        <div className="sort-Arrow-container" onClick={toggleSort}>
          {sortType==="desc"?<FaChevronDown/>:<FaChevronUp/>}
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
        <div className={`dropdown-item ${"activity" === sortField ? "selected" : ""}`} onClick={() => handleSortField("activity")}>
        
         Activity 
        </div>
     
 
      </div>
    </div>
  );
};

export default SortDropdown;
