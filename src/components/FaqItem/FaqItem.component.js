import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

const FaqItem = ({ faqItem }) => {
  const { eventKey, question, answer } = faqItem;

  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
        {question}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>{answer}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default FaqItem;
