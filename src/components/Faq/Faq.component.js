import React from 'react';
import Section from '../Section/Section.component';
import Accordion from 'react-bootstrap/Accordion';
import FaqItem from '../FaqItem/FaqItem.component';

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
        {faqItems.map((faqItem, index) => (
          <FaqItem key={index} faqItem={faqItem} />
        ))}
      </Accordion>
    </Section>
  );
};

export default Faq;
