import { React, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

import './AboutMe.css';

export function AboutMe() {
    
    return (
        <div className='row justify-content-center border-top border-dark border-bottom border-dark sticky-top'>
            <div id='about-container'>
                <div className='row' id='about-preview'>
                    /* left hash */
                    <div id='about-left-hash' className='col-7'>
                        <div id='about-left-hash-text'>
                            I'm currently pursuing my <span className='fw-bold text-dark'>Ph.D. in computer science</span> from <span className='fw-bold text-dark'>Vanderbilt University</span> under the guidance of <span className='fw-bold text-dark'>Dr. Taylor Johnson</span>.
                            <br/>
                            <br/>
                            I have startup experience from time spent at <span className='fw-bold text-dark fst-italic'>Elementary Robotics</span> working as a software engineer on the Edge Team. Here, I got to see a computer vision application firsthand and get a better sense of the innerworkings of a software system—more specifically, a machine learning application.
                        </div>
                    </div>

                    /* right hash */
                    <div id='about-right-hash' className='col-3'>
                        <div id='about-right-hash-title' className=''>about</div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

