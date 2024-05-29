import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// shader gradient
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

// custom components
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./components/Main";
import { Title } from "./components/Title";
import { SectionHeader } from "./components/SectionHeader";

// context
import selectedItemContext from "./components/SelectedItemContext";

function App() {
  const [selectedItem, setSelectedItem] = useState("home");

  const updateSelectedItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="App">
      {/* <ShaderGradientCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          position: "absolute",
          top: 0,
          pointerEvents: "none",
          zIndex: -100,
        }}
      >
        <ShaderGradient
          type="waterPlane"
          animate="on"
          uTime={0}
          uSpeed={0.3}
          uStrength={1.2}
          uDensity={1.4}
          uFrequency={1.4}
          positionX={-1.4}
          positionY={0}
          positionZ={0}
          rotationX={0}
          rotationY={10}
          rotationZ={50}
          color1="#db6155"
          color2="#a765c6"
          color3="#6b0000"
          brightness={1.1}
          grain="off"
        />
      </ShaderGradientCanvas> */}

      <selectedItemContext.Provider
        value={{ selectedItem, updateSelectedItem }}
      >
        <Header />
        <div className="body-container">
          {/* <Sidebar /> */}
          <SectionHeader />
          <Title />
          <Main />
        </div>
      </selectedItemContext.Provider>
    </div>
  );
}

export default App;
