import React from "react";

import "../static/SectionHeader.css";

import selectedItemContext from "./SelectedItemContext";

export function SectionHeader() {
  const { selectedItem, updateSelectedItem } =
    React.useContext(selectedItemContext);

  return (
    <div className="section-header-container">
      {selectedItem === "home" ? "~~~" : selectedItem.toUpperCase()}
    </div>
  );
}
