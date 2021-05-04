import React from 'react';
import Section from '../Section/Section.component';
import Accordion from 'react-bootstrap/Accordion';
import FaqItem from '../FaqItem/FaqItem.component';

const Faq = () => {
  const faqItems = [
    {
      question: 'Medios de pago',
      answer: 'Se aceptan únicamente medios de pago digitales.',
    },
  ];

  return (
    <Section title='Preguntas frecuentes'>
      <Accordion>
        {faqItems.map(({ question, answer }, index) => (
          <FaqItem
            key={index}
            eventKey={index.toString()}
            question={question}
            answer={answer}
          />
        ))}
      </Accordion>
    </Section>
  );
};

export default Faq;
