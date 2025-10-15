import 'antd/dist/reset.css';
import './App.css'
import { Routes, Route, useLocation } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./component/nav/Navbar"
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Works from './pages/works/Works'
import Contact from './pages/contact/Contact'
import Wrapper from './component/pageWrapper/Wrapper';
import Footer from './component/footer/Footer'
import { useState } from 'react';
import IntroAnimation from './pages/introAnimation/IntroAnimation';



function App() {
  const [theme, setTheme] = useState("dark");
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === "/";
  return (
    <div className='papa' data-theme={theme}>
      {!hideNavbarAndFooter && <Navbar theme={theme} setTheme={setTheme} />}
      <Routes>
        <Route path="/" element={<IntroAnimation />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<Wrapper><About /></Wrapper>} />
        <Route path='/services' element={<Wrapper><Services /></Wrapper>} />
        <Route path='/works' element={<Wrapper><Works /></Wrapper>} />
        <Route path='/contact' element={<Wrapper><Contact /></Wrapper>} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

export default App;
