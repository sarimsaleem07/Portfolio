import React, { useState, useRef } from 'react';
import './Faqs.css';
import { faqs } from '../../data/portfolioData';

const FaqItem = ({ item, isOpen, onToggle }) => {
    const bodyRef = useRef(null);

    return (
        <div className={`faqs-item${isOpen ? ' open' : ''}`} onClick={onToggle}>
            <div className="faqs-summary">
                <h2 className="faqs-title">{item.title}</h2>
            </div>
            <div
                className="faqs-description"
                style={{ maxHeight: isOpen ? bodyRef.current?.scrollHeight + 'px' : '0px' }}
                ref={bodyRef}
            >
                <div className="faqs-description-inner">{item.description}</div>
            </div>
        </div>
    );
};

const Faqs = () => {
    const [openItem, setOpenItem] = useState(null);
    const toggle = (id) => setOpenItem(prev => prev === id ? null : id);

    return (
        <div className="faqs-wrapper">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            {faqs.map((item) => (
                <FaqItem
                    key={item.id}
                    item={item}
                    isOpen={openItem === item.id}
                    onToggle={() => toggle(item.id)}
                />
            ))}
        </div>
    );
};

export default Faqs;
