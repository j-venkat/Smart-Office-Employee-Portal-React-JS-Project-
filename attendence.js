import React from 'react';
import MyNavbar from '../components/MyNavbar';
import { Container, Table, Badge, Card } from 'react-bootstrap';

const Attendance = () => {
  // Mock Data
  const records = [
    { date: '2026-01-01', status: 'Present', checkIn: '09:00 AM', checkOut: '06:00 PM' },
    { date: '2026-01-02', status: 'Present', checkIn: '09:15 AM', checkOut: '06:10 PM' },
    { date: '2026-01-03', status: 'Late', checkIn: '10:00 AM', checkOut: '06:30 PM' },
    { date: '2026-01-04', status: 'Absent', checkIn: '-', checkOut: '-' },
    { date: '2026-01-05', status: 'Present', checkIn: '08:55 AM', checkOut: '05:55 PM' },
  ];

  const getBadge = (status) => {
    if (status === 'Present') return 'success';
    if (status === 'Late') return 'warning';
    return 'danger';
  };

  return (
    <>
      <MyNavbar />
      <Container>
        <Card className="shadow-sm">
          <Card.Header as="h5">Attendance History</Card.Header>
          <Card.Body>
            <Table striped hover responsive>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                </tr>
              </thead>
              <tbody>
                {records.map((rec, index) => (
                  <tr key={index}>
                    <td>{rec.date}</td>
                    <td><Badge bg={getBadge(rec.status)}>{rec.status}</Badge></td>
                    <td>{rec.checkIn}</td>
                    <td>{rec.checkOut}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Attendance;