import React from 'react'
import Navbar from './Navbar'

import Rectangle from "../Assets/Rectangle.png"
// import './Home.css';

function Home({ isBlurred }) {
    // const [isBlurred, setIsBlurred] = useState(false);

    return (
        <div className={`home-container ${isBlurred ? 'blurred' : ''}`}>
            <Navbar />
            <div className='home-banner-container'>
                <div className='home-bannerImage-container'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="397" height="839" viewBox="0 0 397 839" fill="none">
                        <path d="M0 0H397V839H103C46.1147 839 0 792.885 0 736V0Z" fill="#00487C" />
                    </svg>
                </div>
                <div className='home-text-section'>
                    <div className='primary-heading'>
                        "Unlock your potential as a Mentor and empower others to thrive."
                    </div>
                    {/* frame 50 */}
                    <div className='button-section'>

                        <button className='secondary-button'>
                            <div className='button-two'>
                                <div className='button-text'>
                                    Get Started as a Mentor
                                </div>


                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                                    <path d="M2.92944 9.4353L16.6526 9.29845M11.5476 2.91125L18.0706 9.43424L11.4162 16.0886" stroke="#00A896" stroke-width="4" stroke-linecap="square" stroke-linejoin="round" />
                                </svg>
                            </div>

                        </button>
                        <button className='secondary-button-2'>
                            <div className="button-two-2">
                                <div className='button-text-2'>
                                    Learn more
                                </div>

                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                                    <path d="M3 9.43529L16.7232 9.29844M11.6182 2.91125L18.1412 9.43424L11.4868 16.0886" stroke="#00A896" stroke-width="4" stroke-linecap="square" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </button>

                    </div>
                </div>
                <div className="home-image-section">
                    <img src={Rectangle} alt="" />
                </div>

            </div>


        </div>
    )
}

export default Home