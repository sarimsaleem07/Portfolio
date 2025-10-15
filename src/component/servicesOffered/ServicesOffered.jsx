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

    const data = [
        {
            image: servicesOffered1,
            title: "UI UX Design"
        },
        {
            image: servicesOffered2,
            title: "Mobile App"
        },
        {
            image: servicesOffered3,
            title: "Product Design"
        },
        {
            image: servicesOffered4,
            title: "Branding"
        },

    ]

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
                                    {data.map((item, index) => (
                                        <Col md={6} lg={3}>
                                            <div className="services-offered-item">
                                                <div className="services-offered-image">
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <div className="services-offered-text">
                                                    <h3>{item.title}</h3>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="services-offered-item-box">
                                <div className="services-offered-card-title2">
                                    <div className="scrolling-info">
                                        <div className="slider-item">
                                            <p>I help businesses craft intuitive, user-friendly digital products that not only look great but also deliver meaningful results</p>
                                        </div>
                                    </div>
                                    <h2>Let's<br /> Work Together</h2>
                                    <a href="" onClick={() => navigate("/contact")}>Let's Talk  <FaArrowTrendUp /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container >
        </div >
    )
}

export default ServicesOffered