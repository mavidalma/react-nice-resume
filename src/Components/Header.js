import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import {isMobile} from 'react-device-detect';
import event from '../helpers/eventController';

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


    return (
      <header id="home">
         {isMobile ?
         <ParticlesBg type="cobweb" num={77} color={["#fe6928", "#ffffff"]} bg={true} />
         :
         <ParticlesBg type="cobweb" num={182} color={["#fe6928", "#ffffff"]} bg={true} />
      }
      
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
               <a href={linkedin} className="button btn project-btn" target="_blank" onClick={()=> event.linkedinHeader()}><i className="fa fa-book" ></i>linkedIn</a>
               <a href={github} className="button btn github-btn" target="_blank" onClick={()=> event.githubHeader()}><i className="fa fa-github"></i>Github</a>
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
