import { React, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

import './AboutMe.css';

export function AboutMe() {
    
    return (
        <div className='row justify-content-center sticky-top'>
            <div id='about-container' className='col-12 d-flex align-items-center border-top border-dark border-bottom border-dark'> {/* border-top border-dark */}
                <div id='about-subcontainer' className='row justify-content-evenly d-flex align-items-start'>
                    
                    {/* left hash */}
                    <div id='about-left' className='col-6'>
                        <div id='about-text' className=''>
                        I'm currently pursuing my <span className='fw-bold text-dark'>Ph.D. in computer science</span> from <span className='fw-bold text-dark'>Vanderbilt University</span> under the guidance of <span className='fw-bold text-dark'>Dr. Taylor Johnson</span>.
                        <br/>
                        <br/>
                        I have startup experience from time spent at <span className='fw-bold text-dark fst-italic'>Elementary Robotics</span> working as a software engineer on the Edge Team. Here, I got to see a computer vision application firsthand and get a better sense of the innerworkings of a software system.
                        <br/>
                        <br/>
                        I am also a former collegiate athlete with a great appreciation for working in a team environment.
                        </div>
                    </div>

                    {/* right hash */}
                    <div id='about-right' className='col-3'>
                        <div id='about-right-title' className=''>about</div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

