import { useState } from 'react';
import { FaArrowRightLong, FaArrowTrendUp } from 'react-icons/fa6';
import "./LatestProjects.css";
import { Image } from 'antd';
import work1 from "../../assets/work1.webp"
import work2 from "../../assets/work2.webp"
import work3 from "../../assets/work3.webp"

const LatestProjects = () => {
    return (
        <div className='latest-projects'>
            <div className="about-data">
                <div className="about-heading">
                    <h1>Check Out My Latest <span className="highlight">Projects </span></h1>
                </div>
                <p className='contact-data-para'>
                    I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.
                </p>
            </div>

            <div className="latest-projects-container">
                <div className="latest-projects-image">
                    <Image
                        src={work1}
                        alt="AIMug Project"
                        width="100%"
                        height={400}
                        style={{ borderRadius: '8px 8px 0 0', objectFit: 'cover', objectPosition: 'top' }}
                    />
                    <a href=""></a>
                </div>
                <div className="latest-projects-data">
                    <div className="latest-projects-text">
                        <h4>Cave Counselling – Mental Health Platform</h4>
                        <h6>Product Designer | UX/UI Specialist</h6>
                    </div>
                    <div className="latest-projects-link">
                        <a href="https://www.cavecounselling.com/">Visit Site <FaArrowTrendUp className='latest-icon' /></a>
                    </div>
                </div>
            </div>
            <div className="latest-projects-container">
                <div className="latest-projects-image">
                    <Image
                        src={work2}
                        alt="AIMug Project"
                        width="100%"
                        height={400}
                        style={{ borderRadius: '8px 8px 0 0', objectFit: 'cover', objectPosition: 'top' }}
                    />
                    <a href=""></a>
                </div>
                <div className="latest-projects-data">
                    <div className="latest-projects-text">
                       <h4>Desert Safari UAE – Website & Booking Platform</h4>
                        <h6>Product Designer | UX/UI Design | Web Development</h6>
                    </div>
                    <div className="latest-projects-link">
                        <a href="https://desert-safari-weld.vercel.app/">Visit Site <FaArrowTrendUp className='latest-icon' /></a>
                    </div>
                </div>
            </div>
            <div className="latest-projects-container">
                <div className="latest-projects-image">
                    <Image
                        src={work3}
                        alt="AIMug Project"
                        width="100%"
                        height={400}
                        style={{ borderRadius: '8px 8px 0 0', objectFit: 'cover', objectPosition: 'top' }}
                    />
                    <a href=""></a>
                </div>
                <div className="latest-projects-data">
                    <div className="latest-projects-text">
                         <h4>Digital Marketing Agency – Brand & Web Design</h4>
                        <h6>Lead Designer | Brand Strategist</h6>
                    </div>
                    <div className="latest-projects-link">
                        <a href="https://igloo-theta.vercel.app/">Visit Site <FaArrowTrendUp className='latest-icon' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestProjects;