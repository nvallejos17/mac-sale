import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import FaqItem from '../FaqItem/FaqItem.component';
import Section from '../Section/Section.component';

const Faq = () => {
  const faqItems = [
    {
      header: 'Medios de pago',
      body: (
        <>
          <p>Se aceptan únicamente medios de pago digitales:</p>
          <ul>
            <li>Transferencia bancaria en pesos</li>
            <li>Transferencia bancaria en dólares</li>
            <li>Mercado Pago</li>
            <li>Buenbit</li>
          </ul>
        </>
      ),
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
