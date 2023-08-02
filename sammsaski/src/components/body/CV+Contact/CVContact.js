import { React } from 'react';
import { FiGithub } from 'react-icons/fi'
import { FaGithubSquare } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import { CiLinkedin } from 'react-icons/ci'
import { CiInstagram } from 'react-icons/ci'
import { IconContext } from 'react-icons';

import './CVContact.css';

export function CVContact() {
    return (
        <div id='cv-contact-container' className='row d-flex justify-content-center'>

            /* left hash */
            <div id='cv-contact-left-hash' className='col-1'>
                <div id='cv-contact-left-hash-title'>CV</div>
            </div>

            /* middle hash */
            <div id='cv-contact-middle-hash' className='col-6 d-flex align-items-center'>
                Please feel free to reach out to me at samuel.sasaki@gmail.com or samuel.sasaki@vanderbilt.edu. Or, contact me at one of my socials.
            </div>

            /* right hash */
            <div id='cv-contact-right-hash' className='col-2'>
                <IconContext.Provider value={{color: 'black', size: '50px'}}>
                    <div className='col-12 d-flex justify-content-around'>
                        <a href="https://github.com/sammsaski" target="_blank"><FaGithubSquare fill='black'></FaGithubSquare></a>
                        <a href="https://www.linkedin.com/in/sam-sasaki/" target="_blank"><CiLinkedin fill='black'></CiLinkedin></a>
                        {/* <a href="https://www.instagram.com/sammsaski/?hl=en" target="_blank"><CiInstagram fill='black'></CiInstagram></a> */}
                    </div>
                </IconContext.Provider>    
            </div>
        </div>
    )
}

