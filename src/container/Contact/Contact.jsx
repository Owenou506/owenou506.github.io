import React from 'react'
import './Contact.scss';
import emailjs from '@emailjs/browser';

import { SocialIcon } from 'react-social-icons';
const Contact = () => {
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  return (
    <section id='Contact'>
    <div className='contact__container'>
    <div>
      <h2>Contact me</h2>
      <p>Feel free to contact me via email at <a href = "mailto:owenou506@gmail.com" target="_blank">Email</a><br></br>if you are interested in chatting or have any question</p>
    </div>
    <div className='contact__social'>
    <ul class="social-handle-list">
          <li className="social-handle-item">
          <SocialIcon url="https://www.linkedin.com/in/hsun-ou-yang-4834a9186/" target="_blank" />
          </li>
          <li className="social-handle-item">
          <SocialIcon url="https://www.instagram.com/douz0506/?hl=zh-tw" target="_blank" />
          </li>
          <li className="social-handle-item">
          <SocialIcon url="https://github.com/Owenou506" target="_blank" />
          </li>
    </ul>
    </div>
    </div>

    </section>
  )
}

export default Contact