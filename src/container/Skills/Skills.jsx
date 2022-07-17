import React from 'react'

import images from '../../assets/index.js'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Skills.scss';
const Skills = () => {
  return (
    <section id='Skills'>
      <div className='section__skills'>
      <h2>Skills</h2>
      </div>
      <Container fluid="md" style={{paddingLeft:"20px"}}>
      <Row>
        <Col>
      <div className='skills__imgcontainer'>
        <img src={images.html} alt="html"/>
      </div>
      <div className='skills__imgcontainer'>
        <img src={images.css} alt="css"/>
      </div>
      <div className='skills__imgcontainer'>
        <img src={images.javascript} alt="javascript"/>
      </div>
      <div className='skills__imgcontainer'>
        <img src={images.typescript} alt="typescript"/>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
      <div className='skills__imgcontainer'>
        <img src={images.sass} alt="sass"/> 
      </div>
      <div className='skills__imgcontainer'>
        <img src={images.reactimg} alt="react"/>
      </div>
      <div className='skills__imgcontainer'>
        <img src={images.angular} alt="angular"/>
      </div>
      <div className='skills__imgcontainer'>
        <img src={images.node} alt="node"/>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
      <div className='skills__imgcontainer'>
        <img src={images.python} alt="python"/>
      </div>
      <div className='skills__imgcontainer'>
        <img src={images.cpp} alt="cpp"/>
      </div>
      <div className='skills__imgcontainer'>
        <img src={images.java} alt="java"/>
      </div>
      <div className='skills__imgcontainer'>
        <img src={images.mongo} alt="mongo"/>
      </div>
      </Col>
      </Row>
      <Row>
      <Col>
      <div className='skills__imgcontainer'>
        <img src={images.mysql} alt="mysql"/>
      </div>
      <div className='skills__imgcontainer'>
        <img src={images.docker} alt="docker"/>
      </div>
      <div className='skills__imgcontainer'>
        <img src={images.figma} alt="figma"/>
      </div>
      <div className='skills__imgcontainer'>
        <img src={images.git} alt="git"/>
      </div>
      </Col>
      </Row>
      </Container>
      <div className='skillspadding'></div>
    </section>
  )
}

export default Skills