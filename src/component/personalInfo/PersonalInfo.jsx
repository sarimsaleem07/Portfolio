import React from 'react';
import "./PersonalInfo.css"
import scrolldawn from "../../assets/scrolldawn.svg"
import { FaArrowDownLong } from 'react-icons/fa6';
import { heroStats } from '../../data/portfolioData';

const PersonalInfo = () => {
    return (
        <div className='personal-info'>
            <div className="about-data">
                <div className="about-heading">
                    <h1>Hi, I'm <span className="highlight">Sarim Salim</span></h1>
                    <button className="hire-button">
                        <span className="dot"></span> Available For Hire
                    </button>
                </div>
                <p className='about-data-para'>
                    A <span className="highlight">Frontend Developer</span> & <span className="highlight">Product Designer</span> with <span className="highlight">2+ years</span> of experience building clean, responsive web products for clients across <span className="highlight">4+ countries</span>.
                </p>

                <div className="about-experience">
                    <div className="about-experience-container">
                        {heroStats.map((stat, i) => (
                            <div className="about-experience-data" key={i}>
                                <h2>{stat.value}</h2>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                    <div className="circle-area">
                        <div className="circle-text">
                            <img src={scrolldawn} className='circle-image' alt="scroll down" />
                            <div className="arrow-down">
                                <FaArrowDownLong className='arrow-down-icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
