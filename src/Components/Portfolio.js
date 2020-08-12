import React, { useState, useEffect } from 'react';
import Project from './Project';

function Portfolio ({data, ...props}) {
  const [project, setProject] = useState([]);

  useEffect(()=> {
    data ? setProject(data.projects) : null
  },[data])

    return (
      
      <section id="portfolio">
        {console.log(project)}
        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Ok, ok... Pero ¿has desarrollado algo? ¿Cómo vas de código?</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {project ? 
                project.map((el, i) => <Project project={el} key={i}/> ) 
                : null
              }
            </div>
          </div>
        </div>
      </section>
    );
  }

export default Portfolio;
