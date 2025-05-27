import React from 'react'
import { TbSquarePlus2, TbSearch } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({searchText, handleSearchText}) => {
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="navbar bg-body-tertiary py-50" style={{ padding: "20px" }}>
      <div className="container d-flex justify-content-around">
        <a 
          href="/" 
          onClick={handleLogoClick}
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <div className="d-flex align-items-center">
            <div 
              style={{
                width: "40px",
                height: "40px",
                background: "#1a1a1a",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "12px",
                boxShadow: "0 4px 12px rgba(26, 26, 26, 0.3)"
              }}
            >
              <span style={{ 
                color: "white", 
                fontSize: "18px", 
                fontWeight: "bold",
                fontFamily: "serif"
              }}>
                ✒️
              </span>
            </div>
            <h4 style={{ 
              fontWeight: "700",
              margin: "0",
              color: "#1a1a1a",
              fontSize: "24px",
              letterSpacing: "-0.5px"
            }}>
              InkWell
            </h4>
          </div>
        </a>
        
        <div className="d-flex">
          <div className="position-relative d-flex" style={{ width: "450px" }}>
            <input
              className="form-control"
              type="search"
              placeholder="Search notes..."
              aria-label="Search"
              value={searchText}
              onChange={(e) => handleSearchText(e.target.value)}
              style={{
                paddingLeft: "45px",
                paddingRight: "15px",
                height: "42px",
                borderRadius: "25px 0 0 25px",
                border: "2px solid #1a1a1a",
                borderRight: "none",
                fontSize: "14px",
                transition: "all 0.3s ease",
                flex: "1"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#1a1a1a";
                e.target.style.boxShadow = "0 0 0 0.2rem rgba(26, 26, 26, 0.25)";
                e.target.nextElementSibling.style.borderColor = "#1a1a1a";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#1a1a1a";
                e.target.style.boxShadow = "none";
                e.target.nextElementSibling.style.borderColor = "#1a1a1a";
              }}
            />
            <button 
              className="btn"
              type="submit"
              style={{
                borderRadius: "0 25px 25px 0",
                padding: "0 20px",
                height: "42px",
                border: "2px solid #1a1a1a",
                backgroundColor: "#1a1a1a",
                color: "white",
                fontSize: "14px",
                fontWeight: "500",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#333333";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#1a1a1a";
              }}
            >
              <TbSearch style={{ fontSize: "16px" }} />
            </button>
            <TbSearch 
              style={{
                position: "absolute",
                left: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#6c757d",
                fontSize: "18px"
              }}
            />
          </div>
        </div>

        <Link to="/add-note" style={{ textDecoration: "none" }}>
          <button
            className="btn"
            type="button"
            style={{
              borderRadius: "25px",
              padding: "8px 20px",
              fontWeight: "500",
              transition: "all 0.3s ease",
              border: "2px solid #1a1a1a",
              backgroundColor: "#1a1a1a",
              color: "white"
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#333333";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#1a1a1a";
            }}
          >
            <TbSquarePlus2 style={{ marginRight: "8px" }} /> Add Notes
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;