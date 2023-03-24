import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import './WorkDescription.css'


export function WorkDescription() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        <p id='work-header'>WORK</p>
      </a>
      <Collapse in={open}>
        <div id="example-fade-text" className='ps-2'>
          <div>
            Elementary Robotics
          </div>
        </div>
      </Collapse>
    </>
  );
}
