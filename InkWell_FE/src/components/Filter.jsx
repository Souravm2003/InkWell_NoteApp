import React from 'react'
import { TbFilter } from "react-icons/tb";

const Filter = ({handleFilterText}) => {
  return (
    <div className="container" style={{width: "350px", margin: "20px auto"}}>
      <div className="position-relative">
        <select 
          className="form-select" 
          aria-label="Filter Notes" 
          style={{
            height: "42px",
            paddingLeft: "40px",
            paddingRight: "15px",
            borderRadius: "20px",
            border: "2px solid #1a1a1a",
            fontSize: "13px",
            fontWeight: "500",
            transition: "all 0.3s ease",
            backgroundColor: "white",
            color: "#1a1a1a"
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#1a1a1a";
            e.target.style.boxShadow = "0 0 0 0.2rem rgba(26, 26, 26, 0.25)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#1a1a1a";
            e.target.style.boxShadow = "none";
          }}
          onChange={(e) => handleFilterText(e.target.value)}
        >
          <option value="">All Notes</option>
          <option value="BUSINESS">Business</option>
          <option value="PERSONAL">Personal</option>
          <option value="IMPORTANT">Important</option>
        </select>
        <TbFilter 
          style={{
            position: "absolute",
            left: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#6c757d",
            fontSize: "16px",
            pointerEvents: "none"
          }}
        />
      </div>
    </div>
  )
}

export default Filter