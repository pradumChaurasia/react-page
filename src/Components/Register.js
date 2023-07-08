import React, { useState } from 'react';
import './Register.css';
import Home from './Home';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Footer from './Footer';
import Replacer from '../Assets/Replacer.png';

function Register() {
    const [selected, setSelected] = useState('Category');
    const [selected1, setSelected1] = useState('Sub Category');
    const [selected2, setSelected2] = useState('Availability');
    const [isActive, setIsActive] = useState({
        dropdown1: false,
        dropdown2: false,
        dropdown3: false,
    });

    const options = ['Software Developer', 'Electronics Engineer', 'Content Creator', 'UX/UI Designer'];
    const options1 = ['Full Stack Developer', 'Data Scientist', 'Frontend Developer', 'Backend Developer'];
    const options2 = ['Fresher', '< 1 year', '< 2 years', '> 3 years'];

    const handleDropdownClick = (dropdownName) => {
        setIsActive((prevState) => ({
            ...prevState,
            [dropdownName]: !prevState[dropdownName],
        }));
    };

    return (
        <div className='main'>
            <Home isBlurred={true} />

            <div className='register-container'>
                    <p className='personal'>Personal Information :</p>
                <div className='register-photo'>
                    <div className='photo-upload'>
                    <img src={Replacer} alt=""/>

                    <button className='upload' type="submit">Upload Photo</button>
                    </div>
                    <div className='register-info'>
                        <form className='register-form'>
                            <input type="text" className='name' placeholder='Full Name' />
                            <input type="text" className='e-mail' placeholder='E-mail Address' />
                            <input type="text" className='number' placeholder='Phone Number' />
                            <input type="text" className='dob' placeholder='DOB' />
                        </form>
                    </div>
                </div>

                <div className='register-area'>
                    <p className='area-of'>Area of Expertise:</p>
                    <div className='register-form-2'>
                        <div className='dropdown'>
                            <div className='dropdown-btn' onClick={() => handleDropdownClick('dropdown1')}>
                                {selected}
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                                    <path d="M0 0.933914L5 5.93391L10 0.933914H0Z" fill="black" />
                                </svg>
                            </div>
                            {isActive.dropdown1 && (
                                <div className='dropdown-content'>
                                    {options.map((option) => (
                                        <div
                                            onClick={() => {
                                                setSelected(option);
                                                setIsActive((prevState) => ({
                                                    ...prevState,
                                                    dropdown1: false,
                                                }));
                                            }}
                                            className='dropdown-item'
                                            key={option}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className='dropdown'>
                            <div className='dropdown-btn' onClick={() => handleDropdownClick('dropdown2')}>
                                {selected1}
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                                    <path d="M0 0.933914L5 5.93391L10 0.933914H0Z" fill="black" />
                                </svg>
                            </div>
                            {isActive.dropdown2 && (
                                <div className='dropdown-content'>
                                    {options1.map((option) => (
                                        <div
                                            onClick={() => {
                                                setSelected1(option);
                                                setIsActive((prevState) => ({
                                                    ...prevState,
                                                    dropdown2: false,
                                                }));
                                            }}
                                            className='dropdown-item'
                                            key={option}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='register-form-3'>
                        <p>Availability</p>
                        <div className='dropdown'>
                            <div className='dropdown-btn' onClick={() => handleDropdownClick('dropdown3')}>
                                {selected2}
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                                    <path d="M0 0.933914L5 5.93391L10 0.933914H0Z" fill="black" />
                                </svg>
                            </div>
                            {isActive.dropdown3 && (
                                <div className='dropdown-content'>
                                    {options2.map((option) => (
                                        <div
                                            onClick={() => {
                                                setSelected2(option);
                                                setIsActive((prevState) => ({
                                                    ...prevState,
                                                    dropdown3: false,
                                                }));
                                            }}
                                            className='dropdown-item'
                                            key={option}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <p className='experience'>About Experience:</p>
                        <form className='form-area'>
                            <input type="text" style={{
                                width: "1164px", height: "228px",
                                
                            }}></input>
                        </form>
                    </div>
                </div>
            </div>

            <Footer isBlurred={true} />
        </div>
    );
}

export default Register;
