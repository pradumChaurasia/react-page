import React, { useState } from 'react'
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import Logo from '../Assets/Logo.png'
import MentorDetails from './MentorDetails';
import { useNavigate } from 'react-router-dom';
import Register from './Register';
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import './Navbar.css';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate(<Register />);
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />
        },
        {
            text: "About us",
            icon: <InfoIcon />
        },
        {
            text: "Mentors",

        },
        {
            text: "Sessions",

        }

    ]


    return (
        <nav>
            <div className='logo-container'>
                <img className="logo" src={Logo} style={{ background: 'lightgray 50% / cover no-repeat' }} alt='' />

            </div>
            <div className="navbar-links-container">
                <div className='navbar-elements'>
                    <a href="/">Home</a>
                    <a href="">About us</a>
                    <a href="/mentor-details">Mentors</a>
                    <a href="">Sessions</a>

                </div>
                <button className="primary-button" onClick={() => {
                    navigate('/register');
                }}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z" stroke="#00A896" stroke-width="2" stroke-linejoin="round" />
                        <path d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z" stroke="#00A896" stroke-width="2" />
                    </svg>

                    <span>Sign up</span>
                </button>
            </div>

            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </nav>
    )
}

export default Navbar