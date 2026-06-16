import React, { useState } from "react";
import "./Navbar.css";
import { Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../themeContext/ThemeContext";
import { Drawer } from "antd";
import { navLinks } from "../../data/portfolioData";

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
              {navLinks.map(({ path, label, icon }) => (
                <li
                  key={path}
                  className={`navbar-list-item flex-center-item ${isActive(path) ? "active" : ""}`}
                  onClick={() => handleNavigate(path)}
                >
                  <i className={`${icon} nav-svg`}></i> <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-btns flex-center-item">
            <div className="nav-theme-btn" onClick={toggleTheme}>
              {theme === "dark"
                ? <i className="ri-sun-line theme-svg-sun"></i>
                : <i className="ri-moon-line theme-svg-moon"></i>
              }
            </div>

            <div className="nav-contact-btn d-none d-lg-block">
              <button onClick={() => handleNavigate("/contact")}>
                Let's Talk <i className="ri-corner-right-up-line contact-svg"></i>
              </button>
            </div>

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
        style={{ position: "absolute" }}
        closeIcon={<i className="ri-close-line drawer-close-icon" onClick={() => setOpenDrawer(false)}></i>}
      >
        <ul className="drawer-menu-list">
          {navLinks.map(({ path, label, icon }, i) => (
            <React.Fragment key={path}>
              <li
                className={`navbar-list-item ${isActive(path) ? "active" : ""}`}
                onClick={() => handleNavigate(path)}
              >
                <i className={`${icon} nav-svg`}></i> <span>{label}</span>
              </li>
              {i < navLinks.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </ul>
      </Drawer>
    </div>
  );
};

export default Navbar;
