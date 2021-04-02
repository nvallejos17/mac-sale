import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import FaqItem from '../FaqItem/FaqItem.component';
import { FaqWrapper, FaqContainer } from './Faq.styled';

const Faq = () => {
  const faqItems = [
    {
      header: 'Pregunta',
      body: 'Respuesta',
    },
  ];

  return (
    <FaqWrapper>
      <FaqContainer>
        <Accordion>
          {faqItems.map(({ header, body }, index) => (
            <FaqItem header={header} eventKey={index.toString()}>
              {body}
            </FaqItem>
          ))}
        </Accordion>
      </FaqContainer>
    </FaqWrapper>
  );
};

export default Faq;
