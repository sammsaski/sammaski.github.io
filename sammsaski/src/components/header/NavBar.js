import { React } from 'react';
import Resume from '../../assets/SamuelSasaki-Resume.pdf'
import './NavBar.css'

export function NavBar() {
    return (
        <div className='row justify-content-end sticky-top pt-5 bg-transparent'>
            <div className='col-2'>
                <div className='row row-cols-2'>
                    <a id='link' className='col bg-transparent' href={Resume} target="_blank">&#183; resume</a>
                    <a id='link' className='col bg-transparent' href="#projects">&#183; projects</a>
                </div>
            </div>
        </div>
    )
}