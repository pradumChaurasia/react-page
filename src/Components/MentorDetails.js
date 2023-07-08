import React from 'react';
import Navbar from './Navbar';
import Shalini from '../Assets/Shalini.jpg';
import RekhaSekar from '../Assets/Rekha Sekar.jpg';
import Deepak from '../Assets/Deepak.jpg';
import Naveen from '../Assets/Naveen.jpg';
import Sofia from '../Assets/Sofia.jpg';
import Madhumita from '../Assets/Madhumita.jpg';
import Nirmal from '../Assets/Nirmal.jpg';
import Lokesh from '../Assets/Lokesh.jpg';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

import './MentorDetails.css';
import Footer from './Footer';

function MentorDetails() {
  const mentorData = [
    {
      image: Shalini,
      name: 'Shalini',
      role: 'Software Developer',
      icon1:<FaFacebookF/>,
      icon2:<BsTwitter/>
    },
    {
      image: RekhaSekar,
      name: 'Rekha Sekar',
      role: 'Manager',
      icon1:<FaFacebookF/>,
      icon2:<BsTwitter/>
    },
    {
      image: Deepak,
      name: 'Deepak',
      role: 'UX Designer',
      icon1:<FaFacebookF/>,
      icon2:<BsTwitter/>
    },
    {
      image: Naveen,
      name: 'Naveen',
      role: 'Architect',
      icon1:<FaFacebookF/>,
      icon2:<BsTwitter/>
    },
    {
      image: Sofia,
      name: 'Sofia',
      role: 'Business Strategist',
      icon1:<FaFacebookF/>,
      icon2:<BsTwitter/>
    },
    {
      image: Madhumita,
      name: 'Madhumita',
      role: 'Content Writer',
      icon1:<FaFacebookF/>,
      icon2:<BsTwitter/>
    },
    {
      image: Nirmal,
      name: 'Nirmal',
      role: 'Electrical Engineer',
      icon1:<FaFacebookF/>,
      icon2:<BsTwitter/>
    },
    {
      image: Lokesh,
      name: 'Lokesh',
      role: 'Software Engineer',
      icon1:<FaFacebookF/>,
      icon2:<BsTwitter/>
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="mentor-heading">
          <h1>Our Mentors</h1>
        </div>
      <div className="mentor-container">
        
        <div className="box-container">
          <div className="box">
            {mentorData.map((data) => (
              <div className="mentor-about" key={data.name}>
                <img src={data.image} alt="" />
                <p className='mentor-name'>{data.name}</p>
                <p className='mentor-role'>{data.role}</p>
                <div className="icons">
                <div className='icon1'>{data.icon1}</div>
                <div className='icon2'>{data.icon2}</div>


                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default MentorDetails;
