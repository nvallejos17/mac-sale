import React from 'react';
import { v4 as uuid } from 'uuid';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

const FaqItem = ({ faqItem }) => {
  const { question, answer } = faqItem;
  const eventKey = uuid();

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
