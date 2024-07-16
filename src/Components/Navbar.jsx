import "./Navbar.css";
import { useEffect } from "react";

function Navbar() {
  return (
    <div className="navbar--container">
      <nav>
        <ul>
          <li>
            <a href="#">Logo</a>
          </li>
          <li>
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">Benefits</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
