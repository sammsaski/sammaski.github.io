import React, { useEffect, useState } from "react";

import "../static/Title.css";

// context
import selectedItemContext from "./SelectedItemContext";

/* Thanks, Phil! https://stackoverflow.com/a/73131487 */
const getTextFile = async (filepath) => {
  const res = await fetch(`${process.env.PUBLIC_URL}/title/${filepath}`);

  if (!res.ok) {
    throw res;
  }

  return res.text();
};

export function Title() {
  const { selectedItem, updateSelectedItem } =
    React.useContext(selectedItemContext);

  const [text, setText] = useState("");

  useEffect(() => {
    getTextFile(`${selectedItem}.txt`).then(setText).catch(console.error);
  }, [selectedItem]);

  return <div className="title-container">{text}</div>;
}
