import React from 'react';
import {
  SectionWrapper,
  SectionContainer,
  SectionTitle,
} from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <SectionContainer>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
      </SectionContainer>
    </SectionWrapper>
  );
};

export default Section;
