
import React from 'react';
import MyNavbar from '../components/MyNavbar';
import { Container, ListGroup, Badge, Form, Card } from 'react-bootstrap';

const Tasks = () => {
  const tasks = [
    { id: 1, title: 'Fix Login Bug', priority: 'High', completed: false },
    { id: 2, title: 'Update Profile Page UI', priority: 'Medium', completed: true },
    { id: 3, title: 'API Integration for Attendance', priority: 'High', completed: false },
    { id: 4, title: 'Write Documentation', priority: 'Low', completed: false },
  ];

  return (
    <>
      <MyNavbar />
      <Container>
        <Card className="shadow-sm">
          <Card.Header as="h5">My Tasks</Card.Header>
          <Card.Body>
            <ListGroup>
              {tasks.map((task) => (
                <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-center">
                  <Form.Check 
                    type="checkbox" 
                    label={task.title} 
                    defaultChecked={task.completed}
                    className={task.completed ? "text-decoration-line-through text-muted" : ""}
                  />
                  <Badge bg={task.priority === 'High' ? 'danger' : task.priority === 'Medium' ? 'info' : 'secondary'}>
                    {task.priority}
                  </Badge>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Tasks;
