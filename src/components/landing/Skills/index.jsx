import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            If you're reading this it's probably because you've seen the domain in my email and decided to be nosey. That's cool, that's exactly what I would do if I was thinking of hiring someone. I'm a (mostly) front end web developer who likes to use JavaScript wherever possible. I put this together using a <a href="https://www.gatsbyjs.com/" rel="noopener noreferrer">Gatsby.js</a> starter and <a href="https://vercel.com/" rel="noopener noreferrer">Vercel</a>.
          </p>
          <p>For the last few years I've mostly been working for a fantastic Manchester web development agency called <a href="https://www.unbrandedmanchester.com/" rel="noopener noreferrer">Unbranded</a> based in MediaCity, here's <a href="https://www.unbrandedmanchester.com/research-projects/layout-composer/" rel="noopener noreferrer">an article I wrote</a> for their website.</p>
          
          <p>I mostly just use this domain for email, so it's pretty likely if you check back in a week or two that this will be completely different, or broken, or used for some other experiment. Whilst you're here though, you might as well be extra nosey and see <a href="https://developers.google.com/speed/pagespeed/insights/?url=sourcewebdev.co.uk" target="_blank" rel="noopener noreferrer">what score this page gets in Google Pagespeed</a>.</p>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
