import { React } from 'react';

import './Publications.css';

export function Publications() {
    return (
        <div className='row justify-content-center sticky-top'>
            <div id='pub-container' className='col-12 border-top border-dark'>
                <div id='pub-subcontainer' className='row justify-content-evenly'>
                    
                    {/* left hash */}
                    <div id='pub-left' className='col-4'>
                        <div id='publications' className=''>
                            Coming soon ... 
                        </div>
                    </div>

                    {/* right hash */}
                    <div id='pub-right' className='col-4'>
                        <div id='pub-right-title'>publications</div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

