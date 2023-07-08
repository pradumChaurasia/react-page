import React from 'react'

function Mentor() {
    const MentorInfoData = [
        {
            title: "Business and Entrepreneurship",
            description: "Dive into the world of business and entrepreneurship. Our mentors in this area can provide valuable insights on topics like business strategy, marketing, finance, startups, leadership, and innovation"
        },
        {
            title: "Arts and Creativity",
            description: "Unleash your creative potential with our mentors in the arts and creativity. Whether you're passionate about visual arts, writing, music, photography, or performing arts, our mentors can provide you with the necessary guidance and inspiration."
        },
        {
            title: "Technology",
            description: "Enhance your skills in the ever-evolving field of technology. Our technology mentors can guide you in areas such as software development, web design, data science, cybersecurity, artificial intelligence, and more"
        }
    ]
    return (
        <div className='areas'>
            <div className="work-section-wrapper">
                <div className="work-section-top">

                    <h1 className="primary-heading"><h1>Explore Diverse Mentorship Areas</h1></h1>

                </div>
                <div className="work-section-bottom">
                    {MentorInfoData.map((data) => (
                        <div className="work-section-info" key={data.title}>

                            <h2>{data.title}</h2>
                            <p>{data.description}</p>

                            <button className='read-more'>
                                <p className='more'>Read more</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                    <path d="M1.92944 8.43536L15.6526 8.29851M10.5476 1.91132L17.0706 8.4343L10.4162 15.0887" stroke="#00A896" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <button className='secondary-button-4'>
                <div className='button-three'>
                    <div className='button-text'>
                        Find Your Mentor
                    </div>


                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                        <path d="M2.42944 9.43536L16.1526 9.29851M11.0476 2.91132L17.5706 9.4343L10.9162 16.0887" stroke="#00A896" stroke-width="4" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </div>

            </button>


        </div>


    )
}

export default Mentor