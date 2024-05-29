import React from "react";
import "../static/Header.css";

// context
// import selectedItemContext from "./SelectedItemContext";

// directory
import { Directory } from "./Directory";

export function Header() {
  return (
    <div className="header-container">
      <Directory />
      <div className="contact-container">
        contact me at samuel dot sasaki at vanderbilt dot edu
      </div>
    </div>
  );
}
