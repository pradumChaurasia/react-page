import React from 'react'
import Malini from '../Assets/Malini.jpg';
import Archana from '../Assets/Archana.jpg';
import Deepak from '../Assets/Deepak.jpg';
function Testimonail() {
    const TestimonailInfo = [
        {
            image: Malini,
            name: "Malini sindhu",
            place: "chennai, INDIA",
            description: "Being a mentor on Mentor Hub has been an incredibly rewarding experience. I've had the opportunity to share my knowledge and guide aspiring professionals in their career journeys.”"
        },
        {
            image: Archana,
            name: "Archana Nair",
            place: "kerala, INDIA",
            description: "Mentor Hub has exceeded my expectations. The platform's user-friendly design and comprehensive profile customization options have allowed me to showcase my expertise and build credibility with mentees”."

        },
        {
            image: Deepak,
            name: "Deepak Dinesh",
            place: "chennai, INDIA",
            description: "As a mentor on Mentor Hub, I've been able to connect with mentees from around the world, bridging geographical boundaries. The platform's robust search functionality and categorization have made it easy for mentees to find me based on their specific needs.”"
        }
    ]

    return (
        <div className='testimonial-container'>
            <div className='testimonial-content'>
                <h1>Hear From Our Mentors</h1>
                <div className='testimonial-text'>
                    {TestimonailInfo.map((data) => (
                        <div className='testimonial-info' key={data.name}>
                            <div className='testimonial-subsection'>
                                <div className='testimonial-image'>
                                    <img src={data.image} alt="" />
                                </div>
                                <div className='testimonial-name-place'>
                                    <div className='testimonial-name'>
                                        <p>{data.name}</p>
                                    </div>
                                    <div className='testimonial-place'>
                                        <p>{data.place}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='testimonial-descriptions'>
                                <p>{data.description}</p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Testimonail