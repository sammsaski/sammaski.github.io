import { React } from 'react';

import './Publications.css';

export function Publications() {
    return (
        <div className='row justify-content-center'>
            <div id='ss-container' className='col-11 border-bottom border-dark'>
                <div className='row'>

                    /* left hash */
                    <div id='left-hash' className='col-5 border border-primary'>
                        <div id='publication' className=''>
                            [1] Samuel Sasaki, Random People, More Random People. 
                        </div>
                    </div>

                    /* right hash */
                    <div id='right-hash' className='col-5 border border-primary'>
                        <div id='ss-title' className=''>publications</div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

