import React from 'react'
import "./ServicesOffered.css"
import { Col, Container, Row } from 'react-bootstrap'
import servicesOffered1 from "../../assets/servicesOffered1.svg"
import servicesOffered2 from "../../assets/servicesOffered2.svg"
import servicesOffered3 from "../../assets/servicesOffered3.svg"
import servicesOffered4 from "../../assets/servicesOffered4.svg"
import { FaArrowRightLong, FaArrowTrendUp } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const ServicesOffered = () => {
    const navigate = useNavigate()
    return (
        <div className='services-offered-main'>
            <Container>
                <div className="services-offered-container">
                    <Row>
                        <Col md={8}>
                            <div className="services-offered-item-box">
                                <div className="services-offered-card-title">
                                    <h2>Services I Offer</h2>
                                    <a href="" onClick={() => navigate("/services")}>See All Services <FaArrowRightLong /></a>
                                </div>
                                <Row className='mt-4'>
                                    <Col md={6} lg={3}>
                                        <div className="services-offered-item">
                                            <div className="services-offered-image">
                                                <img src={servicesOffered1} alt="" />
                                            </div>
                                            <div className="services-offered-text">
                                                <h3>UI UX Design</h3>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={3}>
                                        <div className="services-offered-item">
                                            <div className="services-offered-image">
                                                <img src={servicesOffered2} alt="" />
                                            </div>
                                            <div className="services-offered-text">
                                                <h3>Mobile App</h3>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={3}>
                                        <div className="services-offered-item">
                                            <div className="services-offered-image">
                                                <img src={servicesOffered3} alt="" />
                                            </div>
                                            <div className="services-offered-text">
                                                <h3>Product Design</h3>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={3}>
                                        <div className="services-offered-item">
                                            <div className="services-offered-image">
                                                <img src={servicesOffered4} alt="" />
                                            </div>
                                            <div className="services-offered-text">
                                                <h3>Branding</h3>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="services-offered-item-box">
                                <div className="services-offered-card-title2">
                                    <div className="scrolling-info">
                                        <div className="slider-item">
                                            <p>Available For Hire 🚀 Crafting Digital Experiences 🎨 Available For Hire 🚀 Crafting Digital Experiences 🎨</p>
                                        </div>
                                    </div>
                                    <h2>Let's👋 <br /> Work Together</h2>
                                    <a href="" onClick={() => navigate("/contact")}>Let's Talk  <FaArrowTrendUp /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default ServicesOffered