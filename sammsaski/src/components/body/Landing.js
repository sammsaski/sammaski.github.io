import { React } from 'react';
import { FiGithub } from 'react-icons/fi'
import { VscGithub } from 'react-icons/vsc'
import { CiLinkedin } from 'react-icons/ci'
import { CiInstagram } from 'react-icons/ci'
import { IconContext } from 'react-icons';
import './Landing.css';

export function Landing() {
    return (
        // <div className='row justify-content-center'>
        //     <div id='landing-container' className='col-6 border border-success'>Hi, my name is Samuel Sasaki</div>
        // </div>
        <div className='row justify-content-center mt-5'>
            <div id='landing-container' className='col-12'>Hi, my name is Samuel Sasaki.</div>
            <div id='summary' className='col-8 mt-5'>
                <p>I'm a passionate full-stack software engineer interested in working on machine learning platforms, robots, and efficient large-scale software 
                    systems. My passion is rooted in my competitive spirit having been an athlete my whole life and, more specifically, taking that all the way 
                    to the collegiate level. I'm a minimalist at heart and aim to transfer these principles to my work via writing clean code.</p>
            </div>
            <div className='mt-5 col-6'>
                <IconContext.Provider value={{size: '100px'}}>
                    <div className='d-flex justify-content-between border-primary'>
                        <a href="https://github.com/sammsaski" target="_blank"><VscGithub></VscGithub></a>
                        <a href="https://www.linkedin.com/in/sam-sasaki/" target="_blank"><CiLinkedin></CiLinkedin></a>
                        <a href="https://www.instagram.com/sammsaski/?hl=en" target="_blank"><CiInstagram></CiInstagram></a>
                    </div>
                </IconContext.Provider>
            </div>
            <div id='thankyou' className='mt-5'>Thank you for checking out my page!</div>
        </div> 
    )
}

