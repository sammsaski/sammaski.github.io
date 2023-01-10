import { React } from 'react';
import './ProjectsPage.css';
import { Project } from './Project';

// descriptions
import locationDescription from './project_desc/locationanalysis_desc.json'
import wishlistDescription from './project_desc/wishlist_desc.json';


function stringify(arr) {
    return arr.join(" \u00b7 ")
}



export function ProjectsPage() {
    return (
        <div id='projects' className='row justify-content-center'>
            <div id='projects-header' className='col-6 m-5'>Projects</div>
            <div className='row justify-content-center'>
                <Project name='Location Analysis' link={locationDescription.link} status={locationDescription.status} description={locationDescription.data} skills={stringify(locationDescription.skills)}></Project>
                <Project name='Simple Wishlist' link={wishlistDescription.link} status={wishlistDescription.status} description={wishlistDescription.data} skills={stringify(wishlistDescription.skills)}></Project>
            </div>
        </div>
    )
}