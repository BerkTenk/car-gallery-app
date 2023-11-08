import React from 'react'
import NavBar from '../components/NavBar'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function CarShow() {
  return (
    <div>
      <NavBar />
      <Row xs={1} md={2} lg={4} className="g-4 mt-2">
      
        <Col >
          <Card className='mx-1' >
            <Card.Img variant="top" src="https://picsum.photos/1000?random=1" height={"300px"}/>
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
          <Card className='mx-1' >
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
          <Card className='mx-1' >
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
          <Card className='mx-1' >
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
        <Col>
          <Card className='mx-1' >
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
      
    </Row>
    </div>
  )
}

export default CarShow