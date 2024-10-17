import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <>
    <hr />
      <Container >
        <Row><p className='text-center m-3'>All rights under media app @mediaapp.com 2024</p> </Row>
        <Row className='d-flex justify-contents-between'>
          <Col> <p>Media Player</p></Col>
          <Col><p>About Us</p></Col>
          <Col>
         <p> Address</p>
            
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default Footer