import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {

    if(this.props.data){
       var linkedin = this.props.data.linkedin;
       var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    let config = {
      num: [5,10],
      rps: 0.5,
      radius: [1, 20],
      life: [1.5, 1.6],
      v: [1, 0],
      tha: [0, 40],
      // body: "./img/icon.png", // Whether to render pictures
       rotate: [0, 20],
      //alpha: [0.6, 0.6],
      scale: [7, 15],
      position: "center", // all or center or {x:1,y:1,width:100,height:100}
      color: ["random", "#ff0000"],
      cross: "dead", // cross or bround
      random: null,  // or null,
      g: 1,    // gravity
      f: [-1, 1], // force
      onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
      }
    };

    return (
      <header id="home">
      <ParticlesBg type="cobweb" num={182} color={["#fe6928", "#ffffff"]} bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">Sobre mi</a></li>
	         <li><a className="smoothscroll" href="#resume">Perfil</a></li>
            <li><a className="smoothscroll" href="#portfolio">Proyectos</a></li>
            <li><a className="smoothscroll" href="#contact">Contacto</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
               <a href={linkedin} className="button btn project-btn"><i className="fa fa-book"></i>linkedIn</a>
               <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
