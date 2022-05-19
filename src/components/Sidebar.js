import React from "react";
import { SidebarData } from "./SidebarData";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../sidebar.css";

function Sidebar() {
  const location = useLocation();
  let history = useHistory();
  return (
    <div className="Sidebar">
      <div className="Profili">
        <AccountCircleIcon sx={{ fontSize: 100 }} color="success" />
      </div>

      <ul className="SidebarList">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              className="row"
              id={location.pathname == value.link ? "active" : ""}
              onClick={() => {
                history.push(value.link);
              }}
            >
              <div id="icon"> {value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
