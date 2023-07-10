import { React, useEffect } from 'react';
import { FiGithub } from 'react-icons/fi'
import { VscGithub } from 'react-icons/vsc'
import { CiLinkedin } from 'react-icons/ci'
import { CiInstagram } from 'react-icons/ci'
import { IconContext } from 'react-icons';
import './Landing.css';
import Arrow from '../../assets/vertical_arrow.svg';


export function Landing() {    

    useEffect(() => {
        var doc = document.getElementById('ro');

        const elt = document.createElement('span');
        elt.style.display = 'inline-flex';
        elt.style.flexWrap = 'wrap'; // this was the key to putting the element below the 'ro' character
        elt.style.alignItems = 'center';
        elt.style.justifyContent = 'center';
        elt.style.width = '100px'; // this is hardcoded but will need to be able to adapt
        // elt.style.border = '1px solid red';

        const ro = document.createElement('span');
        ro.textContent = '口';
        elt.appendChild(ro);

        // Import the arrow and add it to the DOM
        const arrow = document.createElement('img');
        arrow.src = Arrow;
        arrow.style.backgroundColor = 'white';
        arrow.style.filter = 'invert(1)';
        arrow.style.position = 'relative';
        arrow.style.bottom = '10px';

        // bounce animation
        arrow.style.animation = 'bounce 0.8s';
        arrow.style.animationDirection = 'alternate';
        arrow.style.animationTimingFunction = 'cubic-bezier(.5, 0.05, 1, .5)';
        arrow.style.animationIterationCount = 'infinite';
        elt.appendChild(arrow);

        doc.appendChild(elt)

        return () => {
            doc.removeChild(elt);
        }
    });

    return (
        <div id='landing-container'>
            <div id='landing-text'>
                <span>sam </span>
                <span id='ro'></span>
                <span> sasaki</span>
            </div>
        </div>
    )
}

