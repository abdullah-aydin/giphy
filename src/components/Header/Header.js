import React from "react";
import cx from "classnames";
import "./Header.styles.scss";

function Header() {
  return (
    <div id="header">
      <div className="grid-container">
        <h1>Giphy</h1>
        <div>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search all the GIFs"
          />
        </div>
      </div>
      <div className="grid-subcontainer">
        <hr className="grid-hr" />
        <div className="grid-sub">
          <h4 className="grid-h4">Trending</h4>
          <p className="grid-p">Showing 1-20 of 107146 results</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
