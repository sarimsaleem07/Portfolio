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

const data = [
    { image: servicesOffered1, title: "UI UX Design" },
    { image: servicesOffered2, title: "Mobile App" },
    { image: servicesOffered3, title: "Responsive Design" },
    { image: servicesOffered7, title: "Web Development" },
    { image: servicesOffered5, title: "Code Refactoring & Cleanup" },
    { image: servicesOffered6, title: "Maintenance & Updates" },
    { image: servicesOffered4, title: "Cross-Browser Compatibility" },
    { image: servicesOffered8, title: "Bug Fixing & UI Debugging" }
];

// Utility function: data ko 4-4 ke groups me todna
const chunkArray = (arr, size) =>
    arr.reduce((acc, _, i) => 
        (i % size ? acc : [...acc, arr.slice(i, i + size)]), []
    );

const Products = () => {
    const rows = chunkArray(data, 4); // 4-4 items ek row

    return (
        <div className='product'>
            <div className="about-data">
                <div className="about-heading">
                    <h1>Services I <span className="highlight">Offered</span></h1>
                    <button className="hire-button">
                        <span className="dot"></span> Available For Hire
                    </button>
                </div>
                <p className='about-data-para'>
                    Transforming Ideas into Innovative Reality, Elevate Your Vision with Our Expert 
                    <span className="highlight"> Product Design and Development </span> Services!
                </p>
            </div>

            {rows.map((row, rowIndex) => (
                <Row className="mt-4" key={rowIndex}>
                    {row.map((item, index) => (
                        <Col md={6} lg={3} key={index}>
                            <div className="services-offered-item">
                                <div className="services-offered-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="services-offered-text">
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            ))}
        </div>
    )
}

export default Products;
