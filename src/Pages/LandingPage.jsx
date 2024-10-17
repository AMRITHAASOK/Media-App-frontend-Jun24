import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgGif from '../assets/source.gif'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './LandingPage.css'
import {Link }from 'react-router-dom'
function LandingPage() {
  return (
    <div>
      <Container>
      <Row className='m-4'>
        <Col>
        <p className='p1 my-4'>Welcome to Media Player</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad eaque enim ex, tenetur quos ullam quidem minima hic voluptatum a accusamus aliquid? Voluptates voluptate facere natus totam, labore eius.
        Reiciendis facere corrupti libero duci</p>
        <Link to={'/home'}>
          <Button>Get Started</Button>
        </Link>
        </Col>
        <Col style={{marginLeft:'80px'}}>
      <img src={imgGif} width={'450px'} height={'400px'} alt="" />
        </Col>
      </Row>
      </Container>

      <Container>
        <p className='p1 text-center'>Features</p>
        <Row className='m-5 '>
          <Col>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.bing.com/th/id/OGC.8eeee19bb6b90cf694fa8e1728356325?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2f3o6gDP9oLOGtBMMBSU%2fgiphy.gif&ehk=DD9STD%2bQFBhOd9a6H3xHqdnYqQC1b%2bd1krZAGpqzka8%3d" width={'100%'} height={'200px'} />
      <Card.Body>
      <p className='p1'>Card Title</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.bing.com/th/id/OGC.d30c0ae70658278c709dce9526e6132d?pid=1.7&rurl=https%3a%2f%2fmedia1.tenor.com%2fimages%2fd30c0ae70658278c709dce9526e6132d%2ftenor.gif%3fitemid%3d5711363&ehk=yG%2bQ4cbsJiUKhaL8%2fWvHVhtGzV%2bdMz%2bWikqyPa8nGsY%3d" height={'200px'} width={'100%'} />
      <Card.Body>
        <p className='p1'>Card Title</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
  
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.bing.com/th/id/OGC.9fc872980278403b87c348e7f486d9f5?pid=1.7&rurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2ft4DcI9P3dNVoA%2fgiphy.gif&ehk=JkSa3eW0uL0hfY1ZhvturqY%2bRmbzwNCnAbuNxGhoTMk%3d" height={'200px'}  width={'100%'}/>
      <Card.Body>
      <p className='p1'>Card Title</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className=' border border-light rounded'>
          <Col>
          <p className='p1 text-center'>Simple fast and PowerFul</p>
            <p> <span className='p1'>Play Everything</span>: Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</p>
            <p> <span className='p1'>Play Everything</span>: Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</p>
            <p> <span className='p1'>Play Everything</span>: Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</p>
          </Col>
          <Col className='mt-5 pt-5'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/t-5r2ZDE804?si=lST0L5-MwJ3nKD-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default LandingPage