import React from "react";
import "./Savings.css";

const Savings = ({ current, goal }) => {
  const progressPercentage = (current / goal) * 100;

  return (
    <div className="savings-box">
      <h2 className="savings-title">Savings</h2>
      <p className="savings-subtitle">Set your own goals for a month or year</p>
      <div className="savings-icon">
        {/* SVG-иконка свинки */}
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none">
  <path
    d="M21 10h-1.52c-.3-3.47-3.47-6-7.48-6-2.21 0-4.2.89-5.6 2.34L4 5a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h.11c-.07.33-.11.66-.11 1v4c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3h6c1.66 0 3-1.34 3-3h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm-15 0H4V7l4 2v1zm7 9c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm7-3h-2v-4c0-1.04-.25-2.02-.7-2.88.42.14.83.32 1.2.56.71.44 1.5 1.32 1.5 1.32h2v3l-2 2zm-1.73-5.93c.3-.19.73-.59.73-.59V9.5s-.44-.44-.86-.63A7.03 7.03 0 0 0 12 6c-3.49 0-6.39 2.48-6.92 5.67C5.46 11.24 6 11 6 11h6c.77 0 1.5.13 2.18.38.92.32 1.76.87 2.43 1.56.23.23.43.48.61.75.22.33.33.73.33 1.16h2v-.88a5.714 5.714 0 0 0-.28-.8c-.4-.9-1.14-1.66-2.07-2.11a5.35 5.35 0 0 0-.93-.26zM15.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
    fill="#FF6F61"
  />
</svg>

      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <div className="progress-info">
        <span className="progress-current">${current}</span>
        <span className="progress-goal">${goal}</span>
      </div>
    </div>
  );
};

export default Savings;
