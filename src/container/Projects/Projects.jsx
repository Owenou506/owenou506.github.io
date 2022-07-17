import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Projects.scss';
const Projects = () => {
  return (
    <section id='Projects'>
      <div className='projects'>
        <h2>Projects</h2>
      <CardGroup style={{paddingTop:"10px",paddingLeft:"20px",paddingRight:"20px",paddingBottom:"40px" }}>
      <Card bg='light'style={{ width: '18rem' }}border="dark">
      <Card.Body style={{fontSize:"105%"}}>
        <Card.Title>Animal Split</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">React/React Native Express MongoDb Docker</Card.Subtitle>
        <Card.Text>
        Bill splitting service which help user to log and share with friends and family.
        </Card.Text>
        <Card.Link href="https://www.animalsplit.com/ " target="_blank">Animal Split</Card.Link>
        <Card.Link href="https://apps.apple.com/us/app/animalsplit/id1597801909" target="_blank">AppStore</Card.Link>
        <Card.Link href="https://play.google.com/store/apps/details?id=com.arclight.animalsplit" target="_blank">GooglePlay</Card.Link>
      </Card.Body>
      </Card>
      <Card bg='light'style={{ width: '18rem' }}border="dark">
      <Card.Body style={{fontSize:"105%"}}>
        <Card.Title>WebGL Shading and Animation</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">HTML JavaScript WebGL</Card.Subtitle>
        <Card.Text>
        Used different reflectance models to render 3D object and implemented bezier curves to make an animation.
        </Card.Text>
        <Card.Link href="https://owenou506.github.io/WebGL/" target="_blank">WebGL</Card.Link>
      </Card.Body>
      </Card>
      <Card bg='light'style={{ width: '18rem' }}border="dark">
      <Card.Body style={{fontSize:"105%"}}>
        <Card.Title>Spotify Website</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Angular TypeScript</Card.Subtitle>
        <Card.Text>
        A music website connected to Spotify API which allowed user searching for artists, albums, and tracks.
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link> */}
      </Card.Body>
      </Card>
      </CardGroup>
      <CardGroup style={{paddingLeft:"20px",paddingRight:"20px",paddingBottom:"40px"}}>
      <Card bg='light'style={{ width: '18rem'}}border="dark">
      <Card.Body style={{fontSize:"105%"}}>
        <Card.Title>Movie Site</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Java, MySQL, HTML, JavaScript</Card.Subtitle>
        <Card.Text>
        A website allow user to browse the information of movies
        from MySQL database.
        </Card.Text>
      </Card.Body>
      </Card>
      <Card bg='light'style={{ width: '18rem' }}border="dark">
      <Card.Body style={{fontSize:"105%"}}>
        <Card.Title>Search Engine</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Python, JavaScript, MongoDB</Card.Subtitle>
        <Card.Text>
        A google liked mini searching engine allow user to search by typing keyword.
        </Card.Text>
      </Card.Body>
      </Card>
      <Card bg='light'style={{ width: '18rem' }}border="dark">
      <Card.Body style={{fontSize:"105%"}}>
        <Card.Title>Instant message service</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">C</Card.Subtitle>
        <Card.Text>
        A multi-threaded server that allows users to chat with individuals or in a chat room.
        </Card.Text>
      </Card.Body>
      </Card>
      </CardGroup>
      </div>
      <div className='projects__end'>
      </div>
    </section>
  )
}

export default Projects