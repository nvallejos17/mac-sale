import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import FaqItem from '../FaqItem/FaqItem.component';
import Section from '../Section/Section.component';

const Faq = () => {
  const faqItems = [
    {
      header: 'Pregunta 1',
      body: 'Respuesta 1',
    },
    {
      header: 'Pregunta 2',
      body: 'Respuesta 2',
    },
    {
      header: 'Pregunta 3',
      body: 'Respuesta 3',
    },
  ];

  return (
    <Section title='Preguntas frecuentes'>
      <Accordion>
        {faqItems.map(({ header, body }, index) => (
          <FaqItem header={header} eventKey={index.toString()}>
            {body}
          </FaqItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default Faq;
