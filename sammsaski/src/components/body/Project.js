import { React } from 'react';
import './Project.css'

export function Project(props) {
    return (
        <div className='row justify-content-center mb-5'>
            <div className='col-6 text-start'>
                <div><span id='project-name' className='me-2'>{props.name}</span> &#183; <span className='me-2'></span> {props.status} <span className='me-2'></span> &#183; <span className='me-2'></span><a id="links" href={props.link} target="_blank">{props.link}</a></div>
                <div className='row m-1'>{props.description}</div>
                <div className='row mt-3 ms-1'>Technical Skills -- {props.skills}</div>
            </div>
        </div>
    )
}