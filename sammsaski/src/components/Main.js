import React, { useEffect, useState, useRef } from "react";

import "../static/Main.css";

// context
import selectedItemContext from "./SelectedItemContext";

// shader gradient
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

// subcomponents
import { Publications } from "./MainSubComponents/Publications";
import { Service } from "./MainSubComponents/Service";
import { About } from "./MainSubComponents/About";

/**
 * Reading JSON data.
 * @param {*} filepath
 * @returns JSON
 */
const getJSONFile = async (filepath) => {
  const res = await fetch(`${process.env.PUBLIC_URL}/main-text/${filepath}`);

  if (!res.ok) {
    throw res;
  }

  return res.json();
};

export function Main() {
  // Use the context for managing which section we are viewing.
  const { selectedItem, updateSelectedItem } =
    React.useContext(selectedItemContext);

  // Save the read JSON data as state.
  const [data, setData] = useState({});

  const readJSON = () => {
    if (selectedItem === "home") {
    } else if (selectedItem === "publications") {
      // return <pre>{data}</pre>;
      return <Publications data={data} />;
    } else if (selectedItem === "projects") {
    } else if (selectedItem === "service") {
      return <Service />;
    } else if (selectedItem === "honors") {
    } else {
      // about
      return <About data={data} />;
    }
  };

  /**
   * Executed when we change which section we are viewing.
   */
  useEffect(() => {
    getJSONFile(`${selectedItem}.json`).then(setData).catch(console.error);
    console.log(`here :: ${data}`);
  }, [selectedItem]);

  /** NOTE: EXAMPLE USE OF JSON DATA  */
  // return <div className="main-container">{data.test}</div>;

  return (
    <div className="main-container">
      <div className="main-subcontainer">
        <div className="main-text-container">{readJSON()}</div>

        {/* <div className="gradient-container">
          <ShaderGradientCanvas
            importedFiber={{ ...fiber, drei, ...reactSpring }}
            style={{
              pointerEvents: "none",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            <ShaderGradient
              control="query"
              urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.4&cAzimuthAngle=180&cDistance=8&cPolarAngle=90&cameraZoom=1.5&color1=%23150000&color2=%231e0000&color3=%236a646b&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=40&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1.4&positionX=0&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=180&shader=defaults&toggleAxis=false&type=plane&uAmplitude=0&uDensity=4&uFrequency=5.5&uSpeed=0.4&uStrength=2&uTime=0&wireframe=false&zoomOut=false"
            ></ShaderGradient>
          </ShaderGradientCanvas>
        </div> */}
      </div>
    </div>
  );
}
