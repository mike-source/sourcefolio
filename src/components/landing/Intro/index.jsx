import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import { Wrapper, IntroWrapper, Details } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hello</h1>
          <h4>I'm Mike and I'm a JavaScript developer.</h4>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};
