import React, { useState } from "react";
import "./Navbar.css";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../themeContext/ThemeContext";
import { Drawer } from "antd";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleNavigate = (path) => {
    navigate(path);
    setOpenDrawer(false);
  };

  return (
    <div className="navbar">
      <Container>
        <div className="navbar-sub-parent">
          <div className="navbar-logo">
            <h1 onClick={() => handleNavigate("/")}>Sarim</h1>
          </div>

          <div className="navbar-list-items-parent d-none d-lg-flex">
            <ul className="navbar-list-items flex-center-item ms-auto">
              <li
                className={`navbar-list-item flex-center-item ${isActive("/home") ? "active" : ""}`}
                onClick={() => handleNavigate("/home")}
              >
                <i className="ri-home-smile-2-line nav-svg"></i> <span>Home</span>
              </li>
              <li
                className={`navbar-list-item flex-center-item ${isActive("/about") ? "active" : ""}`}
                onClick={() => handleNavigate("/about")}
              >
                <i className="ri-pass-pending-line nav-svg"></i> <span>About</span>
              </li>
              <li
                className={`navbar-list-item flex-center-item ${isActive("/services") ? "active" : ""}`}
                onClick={() => handleNavigate("/services")}
              >
                <i className="ri-stack-line nav-svg"></i> <span>Services</span>
              </li>
              <li
                className={`navbar-list-item flex-center-item ${isActive("/works") ? "active" : ""}`}
                onClick={() => handleNavigate("/works")}
              >
                <i className="ri-clapperboard-line nav-svg"></i> <span>Works</span>
              </li>
              <li
                className={`navbar-list-item flex-center-item ${isActive("/contact") ? "active" : ""}`}
                onClick={() => handleNavigate("/contact")}
              >
                <i className="ri-message-line nav-svg"></i> <span>Contact</span>
              </li>
            </ul>
          </div>

          {/* Right Side: Theme Toggle + Contact + Hamburger */}
          <div className="nav-btns flex-center-item">
            {/* Theme toggle */}
            <div className="nav-theme-btn" onClick={toggleTheme}>
              {theme === "dark" ? (
                <i className="ri-sun-line theme-svg-sun"></i>
              ) : (
                <i className="ri-moon-line theme-svg-moon"></i>
              )}
            </div>

            {/* Contact Button */}
            <div className="nav-contact-btn d-none d-lg-block">
              <button onClick={() => handleNavigate("/contact")}>
                Let's Talk <i className="ri-corner-right-up-line contact-svg"></i>
              </button>
            </div>

            {/* Hamburger for small screens */}
            <div className="hamburger d-lg-none" onClick={() => setOpenDrawer(true)}>
              <i className="ri-menu-line"></i>
            </div>
          </div>
        </div>
      </Container>

      <Drawer
        title={<h3 className="drawer-title">Menu</h3>}
        placement="right"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        // getContainer={false} 
        style={{ position: "absolute" }}
        closeIcon={
          <i
            className="ri-close-line drawer-close-icon"
            onClick={() => setOpenDrawer(false)}
          ></i>
        }
      >
        <ul className="drawer-menu-list">
          <li
            className={`navbar-list-item ${isActive("/home") ? "active" : ""}`}
            onClick={() => handleNavigate("/home")}
          >
            <i className="ri-home-smile-2-line nav-svg"></i> <span>Home</span>
          </li>
          <hr />
          <li
            className={`navbar-list-item ${isActive("/about") ? "active" : ""}`}
            onClick={() => handleNavigate("/about")}
          >
            <i className="ri-pass-pending-line nav-svg"></i> <span>About</span>
          </li>
          <hr />
          <li
            className={`navbar-list-item ${isActive("/services") ? "active" : ""}`}
            onClick={() => handleNavigate("/services")}
          >
            <i className="ri-stack-line nav-svg"></i> <span>Services</span>
          </li>
          <hr />
          <li
            className={`navbar-list-item ${isActive("/works") ? "active" : ""}`}
            onClick={() => handleNavigate("/works")}
          >
            <i className="ri-clapperboard-line nav-svg"></i> <span>Works</span>
          </li>
          <hr />
          <li
            className={`navbar-list-item ${isActive("/contact") ? "active" : ""}`}
            onClick={() => handleNavigate("/contact")}
          >
            <i className="ri-message-line nav-svg"></i> <span>Contact</span>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default Navbar;