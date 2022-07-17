import React, {useState,useEffect} from 'react'
import coding from '../../assets/coding.gif'
import './About.scss';

const About = () => {
  return (
    <section id = "About">
      <div>
        <h4 className="hello">Hello, My Name is Owen</h4>
        <h5>I'm a Software Engineer</h5>
      </div>
        <div className="about__container">
        <div className="image">
        <img src={coding} alt="coding" width="180%" />  
        </div>
        <div className="text">
        <p >Recent graduate from University of California Irvine B.S. in Computer Science. I am passionate about writting code and interested in web development. I'm always curious about novelty and love to learn new things. I enjoy coding and photograhpy. Currently working at ArcLight Software LLC as a software engineer intern.</p>
        </div>
        </div>
    </section>
  )
}

export default About