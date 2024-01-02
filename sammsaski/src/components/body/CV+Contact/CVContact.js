import { React } from 'react';
import { FiGithub } from 'react-icons/fi'
import { FaGithubSquare } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import { CiLinkedin } from 'react-icons/ci'
import { CiInstagram } from 'react-icons/ci'
import { IconContext } from 'react-icons';

import PDF from '../../../assets/SamuelSasaki-Resume.pdf'

import './CVContact.css';

export function CVContact() {
    return (
        <div id='cv-contact-container' className='row d-flex justify-content-center'>

            <div id='cv-contact-left-hash' className='col-3'>
                <div id='cv-contact-left-hash-title'><a id='cv-contact-left-link' href={PDF} target="_blank">CV</a></div>
            </div>

            <div id='cv-contact-middle-hash' className='col-6 d-flex align-items-center'>
                Please feel free to reach out to me at samuel.sasaki@gmail.com or samuel.sasaki@vanderbilt.edu — or contact me on social media.
            </div>

            <div id='cv-contact-right-hash' className='col-3'>
                <IconContext.Provider value={{color: 'black', size: '50px'}}>
                    <div className='col-12 d-flex justify-content-around'>
                        <a href="https://github.com/sammsaski" target="_blank"><FaGithubSquare fill='black'></FaGithubSquare></a>
                        <a href="https://www.linkedin.com/in/sam-sasaki/" target="_blank"><CiLinkedin fill='black'></CiLinkedin></a>
                    </div>
                </IconContext.Provider>    
            </div>
        </div>
    )
}

