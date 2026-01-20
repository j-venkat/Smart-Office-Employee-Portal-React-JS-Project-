
import React from 'react';
import MyNavbar from '../components/MyNavbar';
import { Container, Card, ListGroup, Row, Col, Image } from 'react-bootstrap';

const Profile = () => {
  return (
    <>
      <MyNavbar />
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Header as="h5">Employee Profile</Card.Header>
              <Card.Body className="text-center">
                <Image 
                  src="https://reqres.in/img/faces/4-image.jpg" 
                  roundedCircle 
                  className="mb-3"
                  style={{ width: '120px', height: '120px' }}
                />
                <Card.Title>Hari</Card.Title>
                <Card.Text className="text-muted">Senior Developer</Card.Text>
                
                <ListGroup variant="flush" className="text-start mt-4">
                  <ListGroup.Item><strong>Email:</strong> eve.holt@reqres.in</ListGroup.Item>
                  <ListGroup.Item><strong>Employee ID:</strong> EMP-9021</ListGroup.Item>
                  <ListGroup.Item><strong>Department:</strong> Engineering</ListGroup.Item>
                  <ListGroup.Item><strong>Join Date:</strong> Jan 18, 2026</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
