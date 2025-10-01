import React from 'react';
import { Col, Row } from 'react-bootstrap';
import servicesOffered1 from "../../assets/servicesOffered1.svg"
import servicesOffered2 from "../../assets/servicesOffered2.svg"
import servicesOffered3 from "../../assets/servicesOffered3.svg"
import servicesOffered4 from "../../assets/servicesOffered4.svg"
import servicesOffered5 from "../../assets/servicesOffered5.webp"
import servicesOffered6 from "../../assets/servicesOffered6.webp"
import servicesOffered7 from "../../assets/servicesOffered7.svg"
import servicesOffered8 from "../../assets/servicesOffered8.svg"

const Products = () => {
    return (
        <div className='product'>
            <div className="about-data">
                <div className="about-heading">
                    <h1>Services I <span className="highlight">Offered</span> 👋</h1>
                    <button className="hire-button">
                        <span className="dot"></span> Available For Hire
                    </button>
                </div>
                <p className='about-data-para'>
                    Transforming Ideas into Innovative Reality, Elevate Your Vision with Our Expert <span className="highlight">Product Design and Development</span> Services!
                </p>
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
                            <h3>Responsive Design</h3>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className="services-offered-item">
                        <div className="services-offered-image">
                            <img src={servicesOffered7} alt="" />
                        </div>
                        <div className="services-offered-text">
                            <h3>Web Development</h3>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className='mt-4'>
                <Col md={6} lg={3}>
                    <div className="services-offered-item">
                        <div className="services-offered-image">
                            <img src={servicesOffered5} alt="" />
                        </div>
                        <div className="services-offered-text">
                            <h3>Code Refactoring & Cleanup</h3>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className="services-offered-item">
                        <div className="services-offered-image">
                            <img src={servicesOffered6} alt="" />
                        </div>
                        <div className="services-offered-text">
                            <h3>Maintenance & Updates</h3>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className="services-offered-item">
                        <div className="services-offered-image">
                            <img src={servicesOffered4} alt="" />
                        </div>
                        <div className="services-offered-text">
                            <h3>Cross-Browser Compatibility</h3>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <div className="services-offered-item">
                        <div className="services-offered-image">
                            <img src={servicesOffered8} alt="" />
                        </div>
                        <div className="services-offered-text">
                            <h3>Bug Fixing & UI Debugging</h3>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Products