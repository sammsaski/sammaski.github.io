import { React } from 'react';

import './Publications.css';

export function Publications() {
    return (
        <div className='row justify-content-center sticky-top'>
            <div id='pub-container' className='col-12 border-top border-dark'>
                <div className='row'>

                    /* left hash */
                    <div id='pub-left-hash' className='col-5'>
                        <div id='publications' className=''>
                            Coming soon ... 
                        </div>
                    </div>

                    /* right hash */
                    <div id='pub-right-hash' className='col-5'>
                        <div id='pub-right-hash-title'>publications</div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

