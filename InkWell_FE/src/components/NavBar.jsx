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
    <>
      <nav className="navbar bg-body-tertiary overflow-x-hidden" style={{ 
        padding: "20px 15px",
        width: "100%",
        maxWidth: "100vw"
      }}>
        <div className="container-fluid overflow-x-hidden" style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "15px",
          width: "100%",
          maxWidth: "100%",
          padding: "0"
        }}>
          {/* Logo Section */}
          <a 
            href="/" 
            onClick={handleLogoClick}
            style={{ 
              textDecoration: "none", 
              cursor: "pointer",
              flexShrink: 0
            }}
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
                fontSize: "clamp(18px, 4vw, 24px)",
                letterSpacing: "-0.5px"
              }}>
                InkWell
              </h4>
            </div>
          </a>
          
          {/* Search Bar Section */}
          <div style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            minWidth: 0,
            maxWidth: "100%"
          }}>
            <div className="position-relative d-flex overflow-hidden" style={{ 
              width: "100%",
              maxWidth: "min(450px, calc(100vw - 300px))",
              minWidth: "200px"
            }}>
              <input
                className="form-control text-break"
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
                  fontSize: "clamp(12px, 2.5vw, 14px)",
                  transition: "all 0.3s ease",
                  flex: "1",
                  minWidth: 0,
                  maxWidth: "100%",
                  boxSizing: "border-box"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#1a1a1a";
                  e.target.style.boxShadow = "0 0 0 0.2rem rgba(26, 26, 26, 0.25)";
                  if (e.target.nextElementSibling) {
                    e.target.nextElementSibling.style.borderColor = "#1a1a1a";
                  }
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#1a1a1a";
                  e.target.style.boxShadow = "none";
                  if (e.target.nextElementSibling) {
                    e.target.nextElementSibling.style.borderColor = "#1a1a1a";
                  }
                }}
              />
              <button 
                className="btn"
                type="submit"
                style={{
                  borderRadius: "0 25px 25px 0",
                  padding: "0 15px",
                  height: "42px",
                  border: "2px solid #1a1a1a",
                  backgroundColor: "#1a1a1a",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  minWidth: "50px",
                  flexShrink: 0
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
                  fontSize: "18px",
                  pointerEvents: "none",
                  zIndex: 1
                }}
              />
            </div>
          </div>

          {/* Add Notes Button */}
          <Link to="/add-note" style={{ 
            textDecoration: "none",
            flexShrink: 0
          }}>
            <button
              className="btn d-flex align-items-center"
              type="button"
              style={{
                borderRadius: "25px",
                padding: "8px 16px",
                fontWeight: "500",
                transition: "all 0.3s ease",
                border: "2px solid #1a1a1a",
                backgroundColor: "#1a1a1a",
                color: "white",
                whiteSpace: "nowrap",
                fontSize: "clamp(12px, 2.5vw, 14px)"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#333333";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#1a1a1a";
              }}
            >
              <TbSquarePlus2 style={{ marginRight: "6px", flexShrink: 0 }} /> 
              <span className="d-none d-sm-inline">Add Notes</span>
              <span className="d-sm-none">Add</span>
            </button>
          </Link>
        </div>
      </nav>

      {/* Enhanced Mobile Styles */}
      <style jsx>{`
        /* Mobile First Approach */
        @media (max-width: 575.98px) {
          .navbar {
            padding: 10px !important;
          }
          
          .container-fluid {
            flex-direction: column !important;
            gap: 10px !important;
            align-items: stretch !important;
          }
          
          .container-fluid > div:nth-child(2) {
            order: 3;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
          }
          
          .container-fluid > div:nth-child(2) > div {
            max-width: 100% !important;
            min-width: unset !important;
          }
          
          .container-fluid > a:first-child {
            order: 1;
            align-self: flex-start;
          }
          
          .container-fluid > a:last-child {
            order: 2;
            align-self: flex-start;
          }
        }
        
        @media (min-width: 576px) and (max-width: 767.98px) {
          .navbar {
            padding: 15px !important;
          }
          
          .container-fluid > div:nth-child(2) > div {
            max-width: 350px !important;
          }
        }
        
        @media (min-width: 768px) and (max-width: 991.98px) {
          .container-fluid {
            gap: 20px !important;
          }
          
          .container-fluid > div:nth-child(2) > div {
            max-width: 400px !important;
          }
        }
        
        /* Landscape phone adjustments */
        @media (orientation: landscape) and (max-width: 896px) and (max-height: 414px) {
          .navbar {
            padding: 5px 15px !important;
          }
          
          .container-fluid {
            gap: 10px !important;
          }
        }
        
        /* Ultra-wide screen adjustments */
        @media (min-width: 1400px) {
          .container-fluid > div:nth-child(2) > div {
            max-width: 500px !important;
          }
        }
      `}</style>
    </>
  );
};

export default NavBar;