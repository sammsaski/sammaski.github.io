import { React } from 'react';

import './TeachingAwardsHonors.css';

export function TeachingAwardsHonors() {
    return (
        <div className='row justify-content-center sticky-top'>
            <div id='tah-container' className='col-12 border-top border-dark'>
                <div id='tah-subcontainer' className='row justify-content-evenly'>
                    
                    {/* left hash */}
                    <div id='tah-left' className='col-3'>
                        <div id='tah-left-title' className=''>
                            teaching . <br/> awards . <br/> honors
                        </div>
                    </div>

                    {/* right hash */}
                    <div id='tah-right' className='col-6'>
                        <div id='tah-right-text'>2022-2023 NCAA Postgraduate Scholarship Recipient</div>
                        <div id='tah-right-text'>2022-2023 Pomona-Pitzer Men's Student-Athlete of the Year</div>
                        <div id='tah-right-text'>Pomona College SURP Grant Recipient</div>
                        <div id='tah-right-text'>Pomona College Scholar</div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

