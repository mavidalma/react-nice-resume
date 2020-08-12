import React from 'react';

function Project ({project, key, ...props}) {
    
    const projectImage = "images/portfolio/" + project.image;
    return (
        <div key={key} className="columns portfolio-item">
            {console.log(project)}
        <div className="item-wrap">
          <a href={project.url} title={project.title}>
            <img alt={project.title} src={projectImage} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{project.title}</h5>
                <p>{project.category}</p>
                <span>{project.tech}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
        )
};

export default Project;