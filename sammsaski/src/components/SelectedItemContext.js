import React from "react";

const selectedItemContext = React.createContext({
  selectedItem: "",
  updateSelectedItem: () => {},
});
export default selectedItemContext;
