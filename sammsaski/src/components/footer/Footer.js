import { React } from 'react';
import './Footer.css';

export function Footer() {


    return (
        <div id='footer-container' className='row justify-content-center'>
            <div className='col-11 d-flex justify-content-between'>
                <div id='footer-text' className='col-8 d-flex justify-content-start'>Thank you for checking out my page.</div>
                <div id='footer-buttons' className='col-3 d-flex justify-content-end'>
                    <div id='footer-contact-button' className='pe-3'>contact</div>
                    <div id='footer-cv-button' className='ps-3'>cv</div>
                </div>
            </div>
        </div>
    )
}