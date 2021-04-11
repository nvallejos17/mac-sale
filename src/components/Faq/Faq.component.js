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
    {
      header: 'Opciones de envío',
      body: (
        <>
          <p>
            Se realizan envíos únicamente a través de Mercado Envíos o cualquier
            servicio de correo privado.
          </p>
          <p>Si elegís recibir el paquete por Mercado Envíos:</p>
          <ul>
            <li>Podés pagar únicamente en pesos por Mercado Pago</li>
            <li>El envío es gratuito</li>
            <li>El paquete viaja asegurado</li>
          </ul>
          <p>Si elegís recibir el paquete por correo privado:</p>
          <ul>
            <li>El costo del servicio queda a cargo del comprador</li>
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
