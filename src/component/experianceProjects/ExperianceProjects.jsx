import React from 'react'
import "./ExperianceProjects.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRightLong } from 'react-icons/fa6'
import project1 from "../../assets/travel.mp4"
import project2 from "../../assets/counselling.mp4"
import Profile from '../profile/Profile'
import { useNavigate } from 'react-router-dom'
import { workExperience, skills } from '../../data/portfolioData'

const ExperianceProjects = () => {
    const navigate = useNavigate()
    const skillRows = [skills.slice(0, 3), skills.slice(3)]

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
                                        {workExperience.map((job, i) => (
                                            <li key={i}>
                                                <div className="date">
                                                    <p>{job.period}</p>
                                                </div>
                                                <div className="info">
                                                    <div className="icon">
                                                        <img src={job.logo} alt={job.company} />
                                                    </div>
                                                    <div className="text">
                                                        <h4 className='title'>{job.company}</h4>
                                                        <h6 className='subtitle'>{job.role}</h6>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="experiance-projects-container mt-4">
                                <h2>My Expert Area</h2>
                                <div className="expert-area">
                                    {skillRows.map((row, rowIndex) => (
                                        <div className="expert-area-carts" key={rowIndex}>
                                            {row.map((skill, i) => (
                                                <div className="expert-area-cart-container" key={i}>
                                                    <div className="expert-area-image">
                                                        <img src={skill.icon} alt={skill.name} />
                                                    </div>
                                                    <div className="expert-area-text">
                                                        <p>{skill.name}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
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
