import React from 'react'
import { ClipLoader } from "react-spinners";

// Fixed override styles for proper centering
const override = {
  borderColor: "purple",
}

// Option 1: Wrapper approach (Recommended)
const Loader = ({loading}) => {
  if (!loading) return null;
  
  return (
    <div className="loader-overlay">
      <ClipLoader
        loading={loading}
        cssOverride={override}
        size={50} // Reduced size for better mobile experience
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader

// Alternative Option 2: Direct positioning
export const LoaderDirect = ({loading}) => {
  if (!loading) return null;
  
  const directOverride = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
    borderColor: "purple",
  };
  
  return (
    <ClipLoader
      loading={loading}
      cssOverride={directOverride}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}

// Option 3: Custom styled wrapper
export const LoaderStyled = ({loading, size = 50, color = "purple"}) => {
  if (!loading) return null;
  
  const wrapperStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(237, 241, 245, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  };
  
  const spinnerOverride = {
    borderColor: color,
  };
  
  return (
    <div style={wrapperStyle}>
      <ClipLoader
        loading={loading}
        cssOverride={spinnerOverride}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}