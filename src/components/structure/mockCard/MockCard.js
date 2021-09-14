import React from "react";
import { Link } from "react-router-dom";
import "./MockCard.scss"

const MockCard = () => {
  return (
    <Link to={`/add`} className="link">
      <div className="mock-card">
        <h2>+</h2>
      </div>
    </Link>
  );
};

export default MockCard;
