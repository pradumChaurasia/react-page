import React from 'react'
import comm from '../Assets/Community.jpg'
function Community() {
    return (
        <div className="community-container">
            <div className='community-image'>
                <img src={comm} alt="" />
            </div>
            <div className='about-community'>
                <div className='about-sub'>
                    <h1>
                        Join Our Community
                        of Mentors
                    </h1>
                    <p>
                        Becoming a mentor on Mentor Hub is quick and easy. Follow these simple steps to get started.
                    </p>
                </div>
                <button className='secondary-button-5'>
                    <div className='secondary-button-5-text'>
                        <p>Learn more</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                            <path d="M3 9.43536L16.7232 9.29851M11.6182 2.91132L18.1412 9.4343L11.4868 16.0887" stroke="#00A896" stroke-width="4" stroke-linecap="square" stroke-linejoin="round" />
                        </svg>
                    </div>
                </button>
            </div>

        </div>
    )
}

export default Community