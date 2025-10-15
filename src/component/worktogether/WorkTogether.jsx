import React from 'react';
import './WorkTogether.css';

const WorkTogether = () => {
    const links = Array(8).fill("Let’s Build Something Great Together");

    return (
        <div className="work-together">
            <div className="work-together-container">
                <div className="work-together-item">
                    {links.map((text, index) => (
                        <a href="#" key={index}>{text}</a>
                    ))}
                </div>
                <div className="work-together-item">
                    {links.map((text, index) => (
                        <a href="#" key={`copy-${index}`}>{text}</a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkTogether;
