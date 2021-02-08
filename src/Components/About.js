import React, { Component } from 'react';
import event from '../helpers/eventController';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var boringResumeDownload = this.props.data.boringResumeDownload;
         var jsResumeDownload = this.props.data.jsResumeDownload;
         var styledResumeDownload = this.props.data.styledResumeDownload;
      }

      return (
         <section id="about">
            <div className="row">
               <div className="five columns">
                  <div className="image-container">
                     <img className="profile-pic" src={profilepic} alt="Mavidalma picture. Unbelievably handsome, as usual." />
                  </div>
                  <div className="columns download">
                    {/*} <a href={boringResumeDownload} className="button" target="_blank" onClick={()=> event.longCVDownload()}><i className="fa fa-download"></i>CV largo y completo</a>
                     <a href={styledResumeDownload} className="button" target="_blank" onClick={()=> event.shortCVDownload()}><i className="fa fa-download"></i>CV estilizado en una página</a>
      */}  <a href={jsResumeDownload} className="button" target="_blank" onClick={()=> event.jsCVDownload()}><i className="fa fa-download"></i>CV friki en javaScript</a>
                  </div>
               </div>
               <div className="seven columns main-col">
                  <h2>Sin abuela:</h2>
                  <p>
                     Soy una persona analítica y creativa por naturaleza así que la actitud emprendedora la llevo siempre conmigo. Mi entorno natural es la incertidumbre; soy muy flexible, me adapto y aprendo muy rápido. <br/>
                  </p>
                  <p>
                     He vivido en 6 ciudades de 3 países distintos, he trabajado en multinacionales enormes y he emprendido; he tenido que ajustar presupuestos al céntimo y manejado millones de euros en tácticos. Busco un proyecto que me permita concentrar mi –heterogénea- experiencia, creciendo como profesional y disfrutando día a día haciéndolo crecer.
                  </p> 
                  <p>
                  Amo la lectura y el cine. Soy deportista, toco la guitarra (o lo intento) y soy PER (Patrón de vela)
                  </p> 
               </div>
            </div>
         </section>
      );
   }
}

export default About;
