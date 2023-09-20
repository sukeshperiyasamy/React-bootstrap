import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 
const PizzaCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('../Image/1 (1).jpeg')} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='text-center'>
        <Button variant="primary">Add to Cart</Button>
        </div>

        
      </Card.Body>
    </Card>
  )
}

export default PizzaCard
