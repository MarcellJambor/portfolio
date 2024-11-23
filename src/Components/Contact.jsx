import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [subject,setSubject] = useState('');
  const [body,setBody] = useState('');

  const handleSubmit = (e)=> {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_SERVICEID;
    const templateId= process.env.REACT_APP_TEMPLATEID;
    const publicKey=process.env.REACT_APP_PUBLICKEY;

    const templateParams = {
      to_name:'Marcell Jambor',
      from_name: name,
      from_email: email,
      from_phone: phone,
      message: body,
      subject: subject
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then(
      (response) => {
        console.log('SUCCESS!',response);
        setName('');
        setEmail('');
        setPhone('');
        setBody('');
        setSubject('');
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
  };


  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Contact Me</h1>
        <div className='info'>
          <div>
            <MdEmail />
            <p>+36 30 357 5333</p>
          </div>
          <div>
            <FaPhoneSquareAlt />
            <p>jambomarc2003@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="contact-input">
        <div className='contact-lines'>
          <div>
            <h3>Name</h3>
            <input type="text" placeholder='Name'  value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
            <h3>Email</h3>
            <input type="email" placeholder='Email' value={email}  onChange={(e) => setEmail(e.target.value)}/>
          </div>
        </div>
        <div className='contact-lines'>
          <div>
            <h3>Phone</h3>
            <input type="text" placeholder='Name' value={phone}  onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div>
            <h3>Subject</h3>
            <input type="email" placeholder='Email' value={subject}  onChange={(e) => setSubject(e.target.value)}/>
          </div>
        </div>
        <div className='contact-lines'>
          <div>
            <h3>Message</h3>
            <input type="text" className='body' placeholder='Your message' value={body}  onChange={(e) => setBody(e.target.value)}/>
          </div>
        </div>
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  )
}

export default Contact
