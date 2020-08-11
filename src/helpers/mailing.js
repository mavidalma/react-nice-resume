import axios from 'axios';

export const mailing = {

  sendToUser: async (data) => {
    try {
      //data must include 'message', and 'email'
      const { message, email, name } = data;

      const messageToSend = `
        <h3> Hola, ${name} </h3>
        <p> Muchas gracias por ponerte en contacto conmigo. </p> <br/>
        <p> Y ahora, ¿qué? </p> <br/>
        <div>
          <p style="display: inline-block"> En poco tiempo recibirás un mail mio, <del>de mi puño y letra</del> tecleado con mis deditos, y a partir de ahí seguimos hablando. </p> 
        </div>
        <div>
        <p style="display: inline-block"> Mientras tanto, si quieres, puedes echar un vistazo a mi <a href="https://www.linkedin.com/in/mariovidalm/">linkedIn</a> o a mi <a href="https://github.com/mavidalma"> gitHub </a>, y te invito a echarle un ojo a los proyectos que tengo enlazados en la web. </p>
      </div>
        <div>
            <p style="display: inline-block"> Muchas gracias de nuevo por haberte puesto en contacto conmigo, y recuerda que esto es un mail <strong>sólo de ida.</strong> Si me respondes a este e-mail, yo no lo veré. Quedará flotando en el hiperespacio, y sería muy triste. Imagínate ese mail, solo, abandonado en un frío servidor de Amazon de sabe Jeff Bezzos dónde...</p> 
            <p> Un saludo, </p>
            <p> Mario</p>
            </div>
      `
      const mail = await axios.post(`${process.env.REACT_APP_MAIL_URL}/send`, {...data, message: messageToSend});

      return mail.data;

    } catch (err) {
      return err.message
    }
  },
  sendToMe: async (data) => {
    try {
      //data must include 'message', and 'email'

      const mymail = process.env.REACT_APP_MY_MAIL;

      const { message, email, name } = data;

      const messageToSend = `
        <h1>Tenemos nuevo mail! YIIIIIIIIHA!! </h1>
        <hr>
        <p> nombre: ${name}</p> <br/>
        <p> mail: ${email}</p><br/>
        <hr>
        <div>
        <p> mensaje: </p> <br/>
        <p> ${message} </p>
        </div>
      `

      const mail = await axios.post(`${process.env.REACT_APP_MAIL_URL}/send`, { ...data, email: mymail, message: messageToSend });

      return mail.data;

    } catch (err) {
      return err.message
    }
  }
}

export default mailing;