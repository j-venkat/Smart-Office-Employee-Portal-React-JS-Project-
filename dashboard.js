import React from 'react';
import MyNavbar from '../components/MyNavbar';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <>
      <MyNavbar />
      <Container>
        <h2 className="mb-4">Dashboard</h2>
        <Row>
          <Col md={4}>
            <Card className="text-white bg-primary mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>Attendance</Card.Title>
                <Card.Text className="display-6">95%</Card.Text>
                <small>Monthly Average</small>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-white bg-success mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>Tasks Completed</Card.Title>
                <Card.Text className="display-6">12</Card.Text>
                <small>This Week</small>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-white bg-warning mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>Pending Reviews</Card.Title>
                <Card.Text className="display-6">3</Card.Text>
                <small>Action Required</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;