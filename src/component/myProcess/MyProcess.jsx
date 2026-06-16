import React from 'react'
import './MyProcess.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaMagnifyingGlass, FaPenNib, FaCode, FaRocket } from 'react-icons/fa6'
import { processSteps } from '../../data/portfolioData'

const icons = [FaMagnifyingGlass, FaPenNib, FaCode, FaRocket]

const MyProcess = () => {
    return (
        <div className='my-process-main'>
            <div className='my-process-container'>
                <div className="about-data">
                    <div className="about-heading">
                        <h1>My <span className="highlight">Process</span></h1>
                    </div>
                    <p className="contact-data-para">
                        A clear, structured approach — from understanding your goals to delivering a polished product.
                    </p>
                </div>
                <Row className='g-3'>
                    {processSteps.map((step, index) => {
                        const Icon = icons[index]
                        return (
                            <Col md={3} sm={6} key={index}>
                                <div className='process-step-card'>
                                    <div className='process-step-number'>{step.step}</div>
                                    <div className='process-step-icon'>
                                        <Icon />
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default MyProcess
