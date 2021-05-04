import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

const FaqItem = ({ eventKey, question, answer }) => {
  return (
    <Card>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={eventKey}
        style={{ cursor: 'pointer' }}
      >
        {question}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>{answer}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default FaqItem;
