import React from 'react'
import Photo from '../Assets/Photo.png';

function About() {
    return (
        <div className='about'>
        <div className='about-section-container'>
            <div className='about-section-text-container'>
                <div className='about-section-subtext-container'>
                    <h1 className='primary-heading'>At Mentor Hub</h1>
                    <p className='primary-heading'>
                        we believe in the power of mentorship. We provide a platform where passionate individuals like you can share your expertise and make a positive impact on others.
                        Whether you're an experienced professional, an industry expert, or a seasoned entrepreneur, Mentor Hub offers you the opportunity to connect with mentees, guide them on their journey, and shape their future.
                    </p>
                </div>
                <div className='about-button-container'>
                    <button className='secondary-button-3'>
                        <div className='button-text'>
                            <p>
                                Learn More
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M3 9.93536L16.7232 9.79851M11.6182 3.41132L18.1412 9.9343L11.4868 16.5887" stroke="#00A896" stroke-width="4" stroke-linecap="square" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>

        </div>
            <div className="about-section-image-container">
                <img src={Photo} alt="" />
            </div>
        </div>
    )
}

export default About