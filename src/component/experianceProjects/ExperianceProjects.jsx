import React from 'react'
import "./ExperianceProjects.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRightLong } from 'react-icons/fa6'
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import javascript from "../../assets/javascript.png"
import react from "../../assets/react.png"
import sass from "../../assets/sass.png"
import bootstrap from "../../assets/bootstrap.png"
import project1 from "../../assets/travel.mp4"
import project2 from "../../assets/counselling.mp4"
import { Image } from 'antd';
import kamelpayLogo from "../../assets/kamelpay-logo.png"
import Profile from '../profile/Profile'
import { useNavigate } from 'react-router-dom'

const ExperianceProjects = () => {

    const navigate = useNavigate()


    return (
        <div className="experiance-projects">
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="page-left">
                            <Profile />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="" style={{ marginTop: "24px" }}>
                            <div className="experiance-projects-container">
                                <h2>Work Experience</h2>
                                <div className="work-experiance-main">
                                    <ul className='work-experiance-slider list-unstyled'>
                                        <li>
                                            <div className="date">
                                                <p>2023 - 2024</p>
                                            </div>
                                            <div className="info">
                                                <div className="icon">
                                                    <img src={kamelpayLogo} alt="" />
                                                </div>
                                                <div className="text">
                                                    <h4 className='title'>KamelPay</h4>
                                                    <h6 className='subtitle'>Intern Frontend</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="date">
                                                <p>2023 - 2024</p>
                                            </div>
                                            <div className="info">
                                                <div className="icon">
                                                    <img src={kamelpayLogo} alt="" />
                                                </div>
                                                <div className="text">
                                                    <h4 className='title'>KamelPay</h4>
                                                    <h6 className='subtitle'>Intern Frontend</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="date">
                                                <p>2024 - Present</p>
                                            </div>
                                            <div className="info">
                                                <div className="icon">
                                                    <img src={kamelpayLogo} alt="" />
                                                </div>
                                                <div className="text">
                                                    <h4 className='title'>KamelPay</h4>
                                                    <h6 className='subtitle'>Junior Frontend</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="experiance-projects-container mt-4">
                                <h2>My Expert Area</h2>
                                <div className="expert-area">
                                    <div className="expert-area-carts">
                                        <div className="expert-area-cart-container">
                                            <div className="expert-area-image">
                                                <img src={html} alt="" />
                                            </div>
                                            <div className="expert-area-text">
                                                <p>HTML</p>
                                            </div>
                                        </div>
                                        <div className="expert-area-cart-container">
                                            <div className="expert-area-image">
                                                <img src={css} alt="" />
                                            </div>
                                            <div className="expert-area-text">
                                                <p>CSS</p>
                                            </div>
                                        </div>
                                        <div className="expert-area-cart-container">
                                            <div className="expert-area-image">
                                                <img src={javascript} alt="" />
                                            </div>
                                            <div className="expert-area-text">
                                                <p>JAVASCRIPT</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="expert-area-carts">
                                        <div className="expert-area-cart-container">
                                            <div className="expert-area-image">
                                                <img src={react} alt="" />
                                            </div>
                                            <div className="expert-area-text">
                                                <p>REACT</p>
                                            </div>
                                        </div>
                                        <div className="expert-area-cart-container">
                                            <div className="expert-area-image">
                                                <img src={bootstrap} alt="" />
                                            </div>
                                            <div className="expert-area-text">
                                                <p>BOOTSTRAP</p>
                                            </div>
                                        </div>
                                        <div className="expert-area-cart-container">
                                            <div className="expert-area-image">
                                                <img src={sass} alt="" />
                                            </div>
                                            <div className="expert-area-text">
                                                <p>SASS</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="experiance-projects-container" style={{ marginTop: "24px" }}>
                            <div className="recent-projects-text">
                                <h2>Recent Projects</h2>
                                <a href="" onClick={() => navigate("/works")}>All Projects <FaArrowRightLong /></a>
                            </div>
                            <div className="recent-projects-images-container">
                                <div className="recent-projects-image-cont">
                                    <div className="image-hover-wrapper">
                                        <video
                                            src={project2}
                                            className="recent-projects-video"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                    </div>
                                </div>
                                <div className="recent-projects-image-cont">
                                    <div className="image-hover-wrapper">
                                        <video
                                            src={project1}
                                            className="recent-projects-video"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ExperianceProjects
