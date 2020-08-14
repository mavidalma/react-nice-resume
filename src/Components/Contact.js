import React, { useState } from 'react';
import mailing from '../helpers/mailing';
import PopUp from './PopUp';

function Contact () {

  const [data, setData] = useState({name:"{aquí iría tu nombre. Bueno, ya nos iremos conociendo}", subject:"contacto desde la web", email:"", message:""})
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const style = {
     visible: {    
        "position": "relative",
        "left": "18px",
        "top": "17px"},
     hidden: { "display": "none"},
     messageOpen: {
      background: "#0F0F0F",
      padding: "24px 24px",
      "margin-bottom": "36px",
      width: "65%",
      "margin-left": "26%",
     }
  };

  const handleChange = (e)=> {
   e.preventDefault();
   const value = e.target.value;
   const name = e.target.name;
   setData({ ...data, [name]: value });
  }

  const handleSubmit = async (e)=> {
     e.preventDefault();
     setLoading(true);

     !data.subject ? setData({...data, subject:"contacto desde la web"}) : null;

     const sendUser = await mailing.sendToUser(data);
     const sendMe = await mailing.sendToMe(data);

      sendUser && sendMe ? setSent(true): null;

      setData({name:"", subject:"", email:"", message:""})
      setLoading(false);
  }

    return (
      <section id="contact">

         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Déjame un mensaje</span></h1>
            </div>
            <div className="ten columns">
                  <p className="lead">No te va a llevar más de 10" y eh, quién sabe, igual es el comienzo de algo interesante y exitoso.</p>
                  <p className="lead">Y en el peor de los casos, no pasa nada. Como mucho habrás perdido 10 segundos.</p>
                  <h4 style={{"text-align": "center"}}>Venga, pon tu mail, tu nombre, y dale. <strong>Es gratis</strong></h4>
            </div>
         </div>

         <div className="row">
            <div className="twelve columns">
               <form  id="contactForm" onSubmit={handleSubmit}>
					<fieldset>
                  <div>
						   <label htmlFor="contactName">Nombre </label>
						   <input type="text" size="35" id="contactName" name="name" onChange={handleChange}/>
                  </div>
                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" size="35" id="contactEmail" name="email" value={data.email} onChange={handleChange} required/>
                  </div>
                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" size="35" id="contactSubject" name="subject" onChange={handleChange}/>
                  </div>
                  <div>
                     <label htmlFor="contactMessage">Mensaje <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="message" value={data.message} onChange={handleChange} required> </textarea>
                  </div>
                  <div>
                     <button className="submit" type="submit">Enviar</button>
                     <span id="image-loader" style={loading ? style.visible : style.hidden}>
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning" style={error ? style.messageOpen : style.hidden} onClick={()=> setError(false)}> UPS! Parece que ha habido un error, por favor inténtalo más tarde o escríbeme por linkedIn :)</div>
				   <div id="message-success" style={sent ? style.messageOpen : style.hidden} onClick={()=> setSent(false)}>
                  <i className="fa fa-check" ></i>Bravo! Mensaje enviado<br />
				   </div>
           </div>
      </div>
   </section>
    );
}

export default Contact;
