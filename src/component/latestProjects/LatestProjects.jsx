import { FaArrowTrendUp, FaImages } from 'react-icons/fa6';
import "./LatestProjects.css";
import { Image } from 'antd';
import { projects } from '../../data/portfolioData';

const LatestProjects = () => {
  return (
    <div className='latest-projects'>
      <div className="about-data">
        <div className="about-heading">
          <h1>Check Out My Latest <span className="highlight">Projects</span></h1>
        </div>
        <p className='contact-data-para'>
          A selection of real-world products I've designed and built — click any image to browse the full gallery.
        </p>
      </div>

      {projects.map((project, index) => (
        <div className="latest-projects-container" key={index}>

          <div className="latest-projects-gallery-wrap">
            <Image.PreviewGroup items={project.images.map(src => ({ src }))}>
              <div className="gallery-main-image">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  preview={{ mask: <div className="gallery-mask"><FaImages /><span>View Gallery ({project.images.length})</span></div> }}
                />
              </div>
            </Image.PreviewGroup>
          </div>

          <div className="latest-projects-data">
            <div className="latest-projects-text">
              <h4>{project.title}</h4>
              <h6 className="latest-projects-subtitle">{project.subtitle}</h6>
              <p className="latest-projects-desc">{project.description}</p>
              <div className="latest-projects-tags">
                {project.tags.map((tag, i) => (
                  <span className="project-tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="latest-projects-link">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Case Study <FaArrowTrendUp className='latest-icon' />
              </a>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default LatestProjects;
