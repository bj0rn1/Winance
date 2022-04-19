import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Shtepia
      </NavLink>
      {" | "}
      <NavLink to="/kategorite" activeStyle={activeStyle}>
        Kategorite
      </NavLink>
      {" | "}
      <NavLink to="/shtoKategori" activeStyle={activeStyle}>
        Shto Kategori
      </NavLink>
    </nav>
  );
};

export default Header;
