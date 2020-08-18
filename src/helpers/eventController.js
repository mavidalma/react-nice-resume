import ReactGA from 'react-ga';

export const event = {

    linkedinHeader:  () => {
        ReactGA.event({
            category: 'link',
            action: 'linkedin click',
            label: 'header link'
          }); 
    },

    githubHeader:  () => {
        ReactGA.event({
            category: 'link',
            action: 'github click',
            label: 'header link'
          });  
    },

    longCVDownload: () => {
        ReactGA.event({
            category: 'cv',
            action: 'donwload',
            label: 'long'
          }); 
    },

    shortCVDownload: ()=> {
        ReactGA.event({
            category: 'cv',
            action: 'download',
            label: 'short'
          });
    },

    jsCVDownload: ()=> {
        ReactGA.event({
            category: 'cv',
            action: 'download',
            label: 'js'
          });
    },

    workExpClick: ()=> {
        ReactGA.event({
            category: 'link',
            action: 'click work experience link',
            label: 'work experience'
          });
    },

    eduClick: () => {
        ReactGA.event({
            category: 'link',
            action: 'click education link',
            label: 'education'
          });
    },

    voyaqi: () => {
        ReactGA.event({
            category: 'link',
            action: 'click voyaqi portfolio link',
            label: 'voyaqui'
          });
    },

    minevera: () => {
        ReactGA.event({
            category: 'link',
            action: 'click minevera portfolio link',
            label: 'minevera'
          });
    },

    bootcampSumm: () => {
        ReactGA.event({
            category: 'link',
            action: 'click bootcamp summary link',
            label: 'bootcamp summary'
          });
    },

    contact: ()=> {
        ReactGA.event({
            category: 'contact',
            action: 'send',
            label: 'contact form submit'
          });
    }
}

export default event;