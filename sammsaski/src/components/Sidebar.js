import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import "../static/Sidebar.css";
import selectedItemContext from "./SelectedItemContext";

export function Sidebar() {
  const { selectedItem, updateSelectedItem } =
    React.useContext(selectedItemContext);

  const optionsRef = useRef({
    home: useRef(null),
    publications: useRef(null),
    projects: useRef(null),
    service: useRef(null),
    honors: useRef(null),
    about: useRef(null),
  });
  const dotRef = useRef(null);

  useEffect(() => {
    // console.log(selectedItem);
    const selectedOptionRef = optionsRef.current[selectedItem].current;
    if (selectedOptionRef && dotRef.current) {
      const optionTop = selectedOptionRef.offsetTop - 22.5;
      const optionLeft = selectedOptionRef.offsetWidth + 50 + 50; // +50 for the padding on the left side of the container and +50 for spacing between word + dot
      // console.log(optionLeft);
      // console.log(optionTop);
      dotRef.current.style.transform = `translateY(${optionTop}px)`;
      dotRef.current.style.left = `${optionLeft}px`;
      // dotRef.current.style.transform = `translateX(${optionLeft}px)`;
    }
  }, [selectedItem]);

  return (
    <div className="sidebar-container">
      <div className="option-container">
        <div ref={dotRef} className="dot"></div>
        {["home", "publications", "projects", "service", "honors", "about"].map(
          (item) => (
            <div
              key={item}
              ref={optionsRef.current[item]}
              className={`option ${item}`}
              onClick={() => updateSelectedItem(item)}
            >
              {/* {item.charAt(0).toUpperCase() + item.slice(1)} */}
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
}
