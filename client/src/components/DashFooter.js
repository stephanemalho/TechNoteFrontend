import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate , useLocation } from "react-router-dom";


const DashFooter = () => {
  
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleHome = () => navigate("/dash");

  let GoHomeButton = null;
  if (pathname !== "/dash") {
    GoHomeButton = (
      <button 
        className="dash-footer__button"
        title="Home"
        onClick={handleHome}>
        <FontAwesomeIcon icon={faHouse} />
      </button>
    );
  }

  const content = (
    <footer className="dash-footer">
      {GoHomeButton}
      <p>Current User: ...</p>
      <p>Status: ...</p>
    </footer>
  );
  return content;
};

export default DashFooter;
