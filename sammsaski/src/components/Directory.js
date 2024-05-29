import React, { useEffect, useRef } from "react";

import "../static/Directory.css";

// motion
import { motion } from "framer-motion";

// context
import selectedItemContext from "./SelectedItemContext";

export function Directory() {
  const { selectedItem, updateSelectedItem } =
    React.useContext(selectedItemContext);

  return (
    <div className="directory-container">
      <nav>
        <ul className="directory-unorderedlist">
          {[
            "home",
            "publications",
            "projects",
            "service",
            "honors",
            "about",
          ].map((item) => (
            <li
              className="directory-li"
              key={item}
              onClick={() => updateSelectedItem(item)}
            >
              {item === "home" ? "~" : `${item}`}
              {item === selectedItem ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
