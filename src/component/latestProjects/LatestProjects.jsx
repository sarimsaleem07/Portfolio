import { FaArrowTrendUp } from 'react-icons/fa6';
import "./LatestProjects.css";
import { Image } from 'antd';
import work1 from "../../assets/work1.webp";
import work2 from "../../assets/work2.webp";
import work3 from "../../assets/work3.webp";

const projects = [
  {
    image: work1,
    title: "Cave Counselling – Mental Health Platform",
    role: "Product Designer | UX/UI Specialist",
    link: "https://www.cavecounselling.com/"
  },
  {
    image: work2,
    title: "Desert Safari UAE – Website & Booking Platform",
    role: "Product Designer | UX/UI Design | Web Development",
    link: "https://desert-safari-weld.vercel.app/"
  },
  {
    image: work3,
    title: "Digital Marketing Agency – Brand & Web Design",
    role: "Lead Designer | Brand Strategist",
    link: "https://igloo-theta.vercel.app/"
  }
];

const LatestProjects = () => {
  return (
    <div className='latest-projects'>
      <div className="about-data">
        <div className="about-heading">
          <h1>Check Out My Latest <span className="highlight">Projects </span></h1>
        </div>
        <p className='contact-data-para'>
          I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.
        </p>
      </div>

      {projects.map((project, index) => (
        <div className="latest-projects-container" key={index}>
          <div className="latest-projects-image">
            <Image
              src={project.image}
              alt={project.title}
              width="100%"
              height={400}
              style={{ borderRadius: '8px 8px 0 0', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className="latest-projects-data">
            <div className="latest-projects-text">
              <h4>{project.title}</h4>
              <h6>{project.role}</h6>
            </div>
            <div className="latest-projects-link">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit Site <FaArrowTrendUp className='latest-icon' />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestProjects;