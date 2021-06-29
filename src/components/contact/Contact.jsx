import React, { useState } from 'react'
import './contact.scss'
import emailjs from 'emailjs-com';


export default function Contact() {

 const [message, setmessage] = useState(false);
 

  const handleSubmit=(e)=>
  {
   

    emailjs.sendForm('service_7d9vlgm', 'template_9iw6uzx', e.target, 'user_Ax74VfaWhdfUXKwJIk9qM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });


      e.target.reset();

      e.preventDefault();
      setmessage(true);





  }

  return (
    <div className='contact' id='contact'>

      <div className="left">
       
        <i class="fas fa-handshake fa-10x"></i>
      </div>

      <div className="right">
        <h2>Contact</h2>

        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Email' id="email" name="email" required/>
        <textarea placeholder='message' id="message" name="message" required></textarea>
        <button type='submit' id="button">Send</button>
        {message && <span>Thanks, I'll replay ASAP :)</span>}
        </form>
        
      </div>
      
    </div>
  )
}
