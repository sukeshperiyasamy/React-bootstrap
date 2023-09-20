import React, { useState } from 'react'
import { Container, Row ,Col } from 'react-bootstrap'
import PizzaCard from './PizzaCard'


const Menu = () => {
  const [menu] = useState([1,2,3,4,5,6])
  return (
  <section id='menu' className='bg-light'>
    <Container>
      <div className='text-center'>
      <h3 className='text-bg-danger  my-3 py-3' > select your perfect tshirt </h3>
      </div>
<Row>
{
  menu.map((item)=>{
return(
    <Col md={6} lg={4} key={item}>
<PizzaCard/>
  </Col>
  )
  })
}
  
</Row>
    </Container>
  </section>
  )
}

export default Menu
