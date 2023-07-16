import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SearchBar from './component/SearchBar'
import Graph from './component/graph'
import Corouselslider from './component/Corouselslider'

const Homepage = () => {
  return (
    <div className='container'>
      <Container>
        
          <Col lg={9} md={9} sm={12}>
           <div>
             <SearchBar/>
          </div> 
          </Col>
      


    <div>
      <Row>
        <Col lg={4} md={4} sm={12}>
          <div style={{ width:'24rem', height:'40vh', border:'2px', backgroundColor:'white', marginTop:'25px', borderRadius:'5px'}}>
            <Graph/>
          </div>

        </Col>

        <Col lg={4} md={4} sm={12}>
          <div style={{ width:'24rem', height:'40vh',marginLeft:'150px', border:'2px', backgroundColor:'rgb(5, 5, 34)', marginTop:'25px', borderRadius:'5px'}}>
            <Corouselslider/>
          </div>

        </Col>

      </Row>
      
    </div>
  </Container>
            
          

        
    </div>
  )
}

export default Homepage