import React, { useState } from 'react';
import './Faqs.css';

const data = [
  {
    id: 1,
    title: "What technologies do you use?",
    description:
      "I specialize in HTML, CSS, JavaScript, and frameworks like React, Next.js, Tailwind CSS, and Bootstrap. I also work with APIs, version control (Git), and tools like Vercel, Netlify, and Figma for collaboration.",
  },
  {
    id: 2,
    title: "Can you make the site mobile responsive?",
    description:
      "Absolutely! Every site I build is fully responsive and works smoothly across all devices — mobile, tablet, and desktop.",
  },
  {
    id: 3,
    title: "Will you design the website or just code it?",
    description:
      "I can either work with a designer’s mockup (like from Figma or Adobe XD), or if needed, I can help design basic layouts myself using modern UI tools and best practices.",
  },
  {
    id: 4,
    title: "How long will it take to complete my website?",
    description:
      "It depends on the size and complexity. A simple 1–2 page site can take 2–5 days. Larger, dynamic websites or dashboards may take 1–3 weeks. I’ll provide a clear timeline after understanding your project.",
  },
  {
    id: 5,
    title: "How much will it cost?",
    description:
      "Pricing varies based on scope. I usually charge per project or offer fixed-price packages for common needs (like landing pages, portfolios, or business sites). Let's talk about your budget — I’m flexible!",
  },
  {
    id: 6,
    title: "Do you offer design revisions?",
    description:
      "Yes — I usually include 1–2 rounds of revisions in my packages to make sure you're happy with the result.",
  },
  {
    id: 7,
    title: "Do you provide maintenance or updates after the project is finished?",
    description:
      "Yes, I offer optional maintenance packages or hourly support after the launch for updates, bug fixes, or improvements.",
  },
];

const Faqs = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="faqs-wrapper">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {data.map((item) => (
        <div 
          className="faq-container" 
          key={item.id}
          open={openItem === item.id}
        >
          <details 
            className="faqs-item"
            open={openItem === item.id}
            onClick={(e) => {
              e.preventDefault();
              toggleItem(item.id);
            }}
          >
            <summary className="faqs-summary">
              <h2 className="faqs-title">{item.title}</h2>
            </summary>
            <div className="faqs-description">
              <div className="faqs-description-inner">
                {item.description}
              </div>
            </div>
          </details>
        </div>
      ))}
    </div>
  );
};

export default Faqs;