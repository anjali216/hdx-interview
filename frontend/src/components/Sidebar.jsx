import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-light vh-100 p-3" style={{ width: "200px" }}>
      <h5>Menu</h5>

      <ul className="nav flex-column">

        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/employees">
            Employees
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/tasks">
            Tasks
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;