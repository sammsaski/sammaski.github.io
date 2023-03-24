import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import './ResearchDescription.css'


export function ResearchDescription() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        <p id='research-header'>RESEARCH</p>
      </a>
      <Collapse in={open}>
        <div id="example-fade-text" className='ps-2'>
            <div>
                <p>My research interests span many areas, primarily ⎯ machine learning + computer vision, autonomous systems + verification, high-performance computing, robotics + control, applied mathematics, and computational theory.</p>
                <p>At the moment, I am actively working to discover an area of expertise among the many topics that peak my interest. The theme of my research is centered around the optimization of autonomous systems via changes to model architectures and classical methods or the improvement of the tools used in them, i.e., the CUDA programming language, modeling tools, system architectures.</p>
                <p>I hope to make autonomous systems a more easily accessible tool to all and unblock some of the innumerable use cases for artificial intelligence.</p>
            </div>

            <div>
                <h3>publications</h3>
                <ul>
                    <li>Waiting to be updated!</li>
                </ul>
            </div>

            <div>
                <h3>teaching</h3>
            </div>

            <div>
                <h3>awards</h3>
            </div>
        </div>
      </Collapse>
    </>
  );
}
