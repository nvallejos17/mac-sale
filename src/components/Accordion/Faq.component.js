import React from 'react';
import Section from '../Section/Section.component';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const Faq = () => {
  const faqItems = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
    },
  ];

  return (
    <Section title='Preguntas frecuentes'>
      <Accordion>
        {faqItems.map(({ question, answer }, index) => (
          <Card id={index}>
            <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
              {question}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index.toString()}>
              <Card.Body>{answer}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </Section>
  );
};

export default Faq;
