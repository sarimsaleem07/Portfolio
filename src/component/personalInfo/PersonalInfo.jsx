import React from 'react';
import "./PersonalInfo.css"
import scrolldawn from "../../assets/scrolldawn.svg"
import { FaArrowDownLong } from 'react-icons/fa6';

const PersonalInfo = () => {
    return (
        <div className='personal-info'>

            <div className="about-data">
                <div className="about-heading">
                    <h1>Hi, This Is <span className="highlight">Sarim Salim</span> 👋</h1>
                    <button className="hire-button">
                        <span className="dot"></span> Available For Hire
                    </button>
                </div>
                <p className='about-data-para'>
                    A Passionate <span className="highlight">Front-End Developer</span> 🖥️ & <span className="highlight">Product Designer</span> having <span className="highlight">2+ years</span> of Experiences over <span className="highlight">4+</span> Country Worldwide.
                </p>

                <div className="about-experience">
                    <div className="about-experience-container">
                        <div className="about-experience-data">
                            <h2>2+</h2>
                            <p>Year of Experience</p>
                        </div>
                        <div className="about-experience-data">
                            <h2>10+</h2>
                            <p>Project Completed</p>
                        </div>
                        <div className="about-experience-data">
                            <h2>5+</h2>
                            <p>Happy Client</p>
                        </div>
                    </div>
                    <div className="circle-area">
                        <div className="circle-text">
                            <img src={scrolldawn} className='circle-image' alt="" />
                            <div className="arrow-down">
                                <FaArrowDownLong  className='arrow-down-icon' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
