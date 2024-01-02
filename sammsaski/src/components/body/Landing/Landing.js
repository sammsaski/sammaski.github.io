import { React } from 'react';
import headshot from '../../../assets/images/headshot.jpg';

import './Landing.css';

// https://www.isabelngan.com/ for inspiration

export function Landing() {
    return (
        <div id='landing-container' className='row justify-content-center'>
            <div id='landing-text-container' className='col-12 border-bottom border-dark'>
                {/* <div id='landing-title' className='border border-primary' >hi — i'm samuel sasaki.</div>
                <div id='landing-summary' className='border border-danger'>
                    . . . &nbsp; DRIVEN BY SYSTEMATIC THINKING.
                </div> */}

                <div id='landing-text-subcontainer' className='row justify-content-center'>
                    {/* Title + Summary */}
                    <div id='title-summary-container' className='col-5 text-start'>
                        <p id='text-title' className='text-dark'>hi — i'm samuel sasaki.</p>

                        <p id='text-summary' className='text-dark'>I'm a first-year Computer Science Ph.D. student under the advisory of Dr. Taylor Johnson in the VeriVITAL lab. My research interests are in safe autonomy, verification, and explainable AI. I am interested in deepening my understanding of formal methods to prove safety and robustness properties of machine learning systems. <br/> <br/> Above all, I love challenging problems and applying myself towards problems of safety and technology.</p>
                    </div>

                    {/* Image */}
                    <div id='image-container' className='col-2'>
                        <img src={headshot} id='image'></img>
                    </div>

                    {/* Links
                    <div id='links-container' className='col-3'>
                        Lorem ipsum.
                    </div> */}
                </div>

                
            </div>
        </div> 
    )
}

