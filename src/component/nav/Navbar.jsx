import React from 'react'
import "./Navbar.css"
import { Container } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../themeContext/ThemeContext';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { theme, toggleTheme } = useTheme();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar">
      <Container>
        <div className="navbar-sub-parent">
          <div className="navbar-logo">
            <h1 onClick={() => navigate("/")}>Sarim .</h1>
          </div>
          <div className="navbar-list-items-parent">
            <ul className='navbar-list-items flex-center-item ms-auto'>
              <li
                className={`navbar-list-item flex-center-item ${isActive('/') ? 'active' : ''}`}
                onClick={() => navigate('/')}
              >
                <i className="ri-home-smile-2-line nav-svg"></i> <span>Home</span>
              </li>
              <li
                className={`navbar-list-item flex-center-item ${isActive('/about') ? 'active' : ''}`}
                onClick={() => navigate('/about')}
              >
                <i className="ri-pass-pending-line nav-svg"></i> <span>About</span>
              </li>
              <li
                className={`navbar-list-item flex-center-item ${isActive('/services') ? 'active' : ''}`}
                onClick={() => navigate('/services')}
              >
                <i className="ri-stack-line nav-svg"></i> <span>Services</span>
              </li>
              <li
                className={`navbar-list-item flex-center-item ${isActive('/works') ? 'active' : ''}`}
                onClick={() => navigate('/works')}
              >
                <i className="ri-clapperboard-line nav-svg"></i> <span>Works</span>
              </li>
              <li
                className={`navbar-list-item flex-center-item ${isActive('/contact') ? 'active' : ''}`}
                onClick={() => navigate('/contact')}
              >
                <i className="ri-message-line nav-svg"></i> <span>Contact</span>
              </li>
            </ul>
          </div>

          <div className="nav-btns flex-center-item">
            <div className="nav-theme-btn">
              <div className="nav-theme-btn" onClick={toggleTheme}>
                {theme === "dark" ? (
                  <i className="ri-sun-line theme-svg-sun"></i>
                ) : (
                  <i className="ri-moon-line theme-svg-moon"></i>
                )}
              </div>
            </div>
            <div className="nav-contact-btn">
              <button onClick={() => navigate('/contact')}>Let's Talk <i className="ri-corner-right-up-line contact-svg"></i></button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
