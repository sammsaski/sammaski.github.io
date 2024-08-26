import { React } from "react";
import headshot from "../../../assets/images/headshot.jpg";

import "./Landing.css";

// https://www.isabelngan.com/ for inspiration

export function Landing() {
  return (
    <div id="landing-container" className="">
      <div className="title-name">Samuel Sasaki</div>
      <br />
      <div className="title-description">
        Second-year Computer Science Ph.D. student under the advisory of Dr.
        Taylor T. Johnson in the VeriVITAL lab.
      </div>
      <br />
      <div className="title-description">
        My research interests are in safe autonomy, verification, and
        explainable AI. I am interested in deepening my understanding of formal
        methods to prove safety and robustness properties of machine learning
        systems. Above all, I love challenging problems and applying myself
        towards problems of safety and technology.
      </div>
    </div>
  );
}
