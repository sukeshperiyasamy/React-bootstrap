import React from 'react'
import {Container ,Row , Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
const Carousels = () => {
  return (
    <Container fluid>
        <Row  className='justify-content-center align-items-center'>
            <Col lg='8'>
            <Carousel data-bs-theme="dark">
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={require('../Image/1 (1).jpeg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p className='d-none d-d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={require('../Image/1 (2).jpeg')}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p className='d-none d-d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} >
        <img
          className="d-block w-100"
          src={require('../Image/1 (3).png')}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p className='d-none d-d-sm-block'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>
        </Row>
        <div className='text-center '>
        <h2 className='display-5 mt-3  '>
            Tshirt for every occasion
        </h2>
        <p className='text-muted '> Lorem text  </p>
        </div>
        
    </Container>
  )
}

export default Carousels
