import { useContext, useRef } from 'react'
import './contact.css'
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';
import Phone from '../../images/phone.png'
import Email from '../../images/email.png'
import Address from '../../images/address.png'
import { useState } from 'react';
import { ThemeContext } from '../../context';

const Contact = () => {
   const formRef = useRef();
   const [done, setDone] = useState(false);
   const theme = useContext(ThemeContext)
   const darkMode = theme.state.darkMode;
//    const [] = useState('');
//    const [] = useState('');
//    const [] = useState('');
//    const [] = useState('');

   const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vqknzo7',
     'template_yof8yra',
      formRef.current, 'JvDT4uRUu_8DRuT-B')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
   }

   
    return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className='c-title'>Lets  discuss your Project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone}
                         alt="" 
                         className="c-icon" />
                         +234 818 5980 756
                    </div>

                    <div className="c-info-item">
                        <img src={Email}
                         alt="" 
                         className="c-icon" />
                         rollingmoney2015@gmail.com
                    </div>

                    <div className="c-info-item">
                        <img src={Address}
                         alt="" 
                         className="c-icon" />
                         No. 05 Nung Akama Street, Udo Ekpo Mkpo, Uyo, Akwa Ibom State.
                    </div>
                    
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story?</b> Get in touch. Always available for 
                    freelancing if the right project comes along me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder='Name' name='user_name' required />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject' required/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="email" placeholder='Email address' name='user_email' required />
                    <textarea style={{backgroundColor: darkMode && "#333"}} name="message" rows="5" placeholder='Message' required/>
                    <button>Submit</button>
                    {done && "Your message has been sent!"}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact