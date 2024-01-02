import { React } from 'react';

import './Research.css';

export function Research() {
    return (
        <div id='research-container' className='row justify-content-center sticky-top'>
            <div id='research-subsection-container' className='col-12'>
                <div id='research-subsection-container-row' className='row justify-content-evenly'>
                    {/* left hash */}
                    <div id='research-left' className='col-4'>
                        <div id='research-left-title'>research interests</div>
                        <br/>
                        <p id='research-left-summary'>—</p>
                        <p id='research-left-summary'>
                            bringing artificial intelligence closer to its users and improving reliability.
                        </p>
                    </div>
                    
                    {/* right hash */}
                    <div id='research-right' className='col-4'>
                        <div id='research-right-subject'>safe autonomy</div>
                        <div id='research-right-subject'>formal methods in verification</div>
                        <div id='research-right-subject'>explainable artificial intelligence</div>
                        <div id='research-right-subject'>mathematics</div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

