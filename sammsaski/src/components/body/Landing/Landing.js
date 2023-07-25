import { React } from 'react';
import { FiGithub } from 'react-icons/fi'
import { VscGithub } from 'react-icons/vsc'
import { CiLinkedin } from 'react-icons/ci'
import { CiInstagram } from 'react-icons/ci'
import { IconContext } from 'react-icons';
import './Landing.css';

export function Landing() {
    return (
        <div id='landing-container' className='row justify-content-center'>
            <div id='text-container' className='col-11 border-top border-dark border-bottom border-dark'>
                <div id='title' className='' >samuel sasaki</div>
                <div id='summary' className=''>
                    driven by systematic thinking.
                </div>
            </div>
        </div> 
    )
}

