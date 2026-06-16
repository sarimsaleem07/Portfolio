import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { allServices } from '../../data/portfolioData';

const chunkArray = (arr, size) =>
    arr.reduce((acc, _, i) =>
        (i % size ? acc : [...acc, arr.slice(i, i + size)]), []
    );

const Products = () => {
    const rows = chunkArray(allServices, 4);

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
    );
};

export default Products;
