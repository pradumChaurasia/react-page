
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Community from './Components/Community';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Mentor from './Components/Mentor';
import MentorDetails from './Components/MentorDetails';
import Register from './Components/Register';
import Testimonail from './Components/Testimonail';
import { Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [selected,setSelected] =useState("");
  
  return (
    <div className="App">

      {/* <Home />
      <About />
      <Mentor />
      
      <Community />
      <Testimonail /> */}
      <Routes>
        <Route path="/" element={<>
          <Home/>
          <About />
          <Mentor />
          <Community />
          <Testimonail/>
          <Footer />
        </>  } />
        <Route path='/mentor-details' element={<MentorDetails />} />
        <Route path="/register" element={<Register selected={selected}  setSelected={setSelected}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
