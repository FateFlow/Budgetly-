import React from "react";
import "./Header.css";

const Header = () => {
    return (
      <header className="header">
        <div className="header-top">
          <h1 className="header-title">BUDGETLY</h1>
        </div>
        <div className="header-center">
          <div className="header-balance">BYN 738.81</div>
          <small className="header-available">Available balance</small>
        </div>
      </header>
    );
  };
  
  export default Header;
  
