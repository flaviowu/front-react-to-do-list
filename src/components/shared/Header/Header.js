import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">

      <Link to="/" className="link">
        <HomeIcon style={{ fontSize: 40 }}/>
      </Link>
      {/* <Link to="/add" style={{ color: "black", textDecoration:"none"}}>
        <h3>Adicionar</h3>
      </Link> */}

    </div>
  );
};

export default Header;
