import React, { useState, useEffect } from 'react';
import Project from './Project';

function Portfolio ({data, ...props}) {
  const [project, setProject] = useState([]);

  useEffect(()=> {
    data ? setProject(data.projects) : null
  },[data])

    return (
      
      <section id="portfolio">
        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Ok, ok... Enséñame cosas que hayas lanzado. ¿Cómo vas de código?</h1>
            <h2>Bueno, además de la sencilla web que estás viendo ahora mismo, tienes estos ejemplos:</h2>
            <br/>

            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
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
