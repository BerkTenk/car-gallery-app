import React from 'react'
import NavBar from '../components/NavBar'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { CarData } from '../components/CarData';
function CarShow() {
  return (
    <div>
      <NavBar />
      <Container fluid>
      {/* <Row xs={1} md={2} lg={4} className="g-4 mt-2">
      
        <Col >
          <Card className='' >
            <Card.Img variant="top" src={ranger} height={"300px"}/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          
        </Col>
        <Col>
          <Card className='' >
            <Card.Img variant="top" src="https://picsum.photos/1000?random=2" height={"300px"}/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          
        </Col>
        <Col>
          <Card className='' >
            <Card.Img variant="top" src="https://picsum.photos/1000?random=3" height={"300px"}/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          
        </Col>
        <Col>
          <Card className='' >
            <Card.Img variant="top" src="https://picsum.photos/1000?random=4" height={"300px"}/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          
        </Col>
       
      
    </Row>
    <Row xs={1} md={2} lg={4} className="g-4 mt-2">
    <Col>
          <Card className='' >
            <Card.Img variant="top" src="https://picsum.photos/1000?random=5" height={"300px"}/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          
        </Col>
        <Col>
          <Card className='' >
            <Card.Img variant="top" src="https://picsum.photos/1000?random=5" height={"300px"}/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          
        </Col>
        <Col>
          <Card className='' >
            <Card.Img variant="top" src="https://picsum.photos/1000?random=5" height={"300px"}/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          
        </Col>
        <Col>
          <Card className='' >
            <Card.Img variant="top" src="https://picsum.photos/1000?random=5" height={"300px"}/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          
        </Col>
        </Row> */}
         <Row xs={1} md={2} lg={4} className="g-4 mt-5">
      {Array.from(CarData).map((data, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={data.img} height={250} />
            <Card.Body> 
              <Card.Title>{data.name}</Card.Title>
              <Card.Text className='text-center bg-success text-white'>
                {data.price} €
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        </Container>
    </div>
  )
}

export default CarShow