import { React } from 'react';

import './TeachingAwardsHonors.css';

export function TeachingAwardsHonors() {
    return (
        <div className='row justify-content-center sticky-top'>
            <div id='tah-container' className='col-12 border-top border-dark'>
                <div className='row'>

                    /* left hash */
                    <div id='tah-left-hash' className='col-3'>
                        <div id='tah-left-hash-title' className=''>teaching<br/>awards<br/>honors
                        </div>
                    </div>

                    /* right hash */
                    <div id='tah-right-hash' className='col-7'>
                        <div id='tah-right-hash-text'>2022-2023 NCAA Postgraduate Scholarship Recipient</div>
                        <div id='tah-right-hash-text'>Pomona College Scholar</div>
                        <div id='tah-right-hash-text'>2022-2023 Pomona-Pitzer Men's Student-Athlete of the Year</div>
                        <div id='tah-right-hash-text'>Pomona College Summer Undergrad. Research Project Grant Recipient</div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

