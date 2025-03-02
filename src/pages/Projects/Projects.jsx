import { useState } from 'react';
import projects from './AllProjects';
import './Projects.css';

import { Helmet } from 'react-helmet-async';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const switchCategories = (category) => {
    setActiveCategory(category);
  };

  return (
    <main>
      <Helmet>
        <title>My Projsects</title>
      </Helmet> 
      <section className="text-center pt-5 pb-5">
        <div className="container">
        <div className="main-title mt-5 mb-5 position-relative">
                <h2>My Projects</h2>
                <p>What I build</p>
            </div>
          <ul className="switcher bg-warning text-white d-flex flex-row py-3 justify-content-around px-0 flex-wrap sm:flex-column">
            <li
              className={activeCategory === 'all' ? 'active' : ''}
              onClick={() => switchCategories('all')}
            >
              All works
            </li>
            <li
              className={activeCategory === 'JavaScript' ? 'active' : ''}
              onClick={() => switchCategories('JavaScript')}
            >
              JavaScript
            </li>
            <li
              className={activeCategory === 'Wordpress' ? 'active' : ''}
              onClick={() => switchCategories('Wordpress')}
            >
              Wordpress
            </li>
            <li
              className={activeCategory === 'React' ? 'active' : ''}
              onClick={() => switchCategories('React')}
            >
              React
            </li>
          </ul>
          <div className="gallery text-start">
            <div className="gap-5 d-flex justify-content-center flex-wrap">
              {projects
                .filter((project) => activeCategory === 'all' || project.category === activeCategory)
                .map((project, index) => (
                  <div className={`post ${project.category} mb-3`} key={index}>
                    <div className="card" style={{ width: '18rem' }}>
                      <img src={project.imageSrc} className="card-img-top" alt={project.title} />
                      <div className="card-body">
                        <h5 className="card-title text-info">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <a href={project.link} className="btn" rel="noreferrer" target="_blank" style={{ backgroundColor: '#BFECFF' }}>
                        Preview
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
