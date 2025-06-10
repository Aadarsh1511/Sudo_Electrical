import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import Footer_nav from './components/Footer_nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fans from './Pages/Fans/Fans';
import Lighting from './Pages/Lighting/Lighting';
import AirCooler from './Pages/AirCooler/AirCooler';
import WaterHeaters from './Pages/WaterHeaters/WaterHeaters';
import SmallAppliances from './Pages/SmallAppliances/SmallAppliances';
import SwitchGears from './Pages/SwitchGears/SwitchGears';
import RegisterWarranty from './Pages/RegisterWarranty/RegisterWarranty';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Blogs from './Pages/Blogs';
import Services from './Pages/Services';
import Careers from './Pages/Careers';
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/careers" element={<Careers/>} />


      <Route path="/Fans" element={<Fans/>}/>
      <Route path="/lighting" element={<Lighting/>} />
      <Route path="/aircooler" element={<AirCooler />} />
      <Route path="/waterheaters" element={<WaterHeaters />} />
      <Route path="/smallappliances" element={<SmallAppliances />} />
      <Route path="/switchgears" element={<SwitchGears />} />
      <Route path="/registerwarranty" element={<RegisterWarranty/>}/> 


      </Routes>
      <Footer />
      <Footer_nav />

    </Router>
  );
}

export default App;
