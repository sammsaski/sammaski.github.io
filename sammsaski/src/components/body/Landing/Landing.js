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
            <div id='landing-text-container' className='col-12 border-top border-dark border-bottom border-dark'>
                <div id='landing-title' className='' >samuel sasaki</div>
                <div id='landing-summary' className=''>
                    driven by systematic thinking.
                </div>
            </div>
        </div> 
    )
}

