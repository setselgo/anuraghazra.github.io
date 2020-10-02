import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="hfest_avatar_2.jpg" />
        </div>
        <p>
          Hi, I'm Anurag Hazra, a passionate self-taught frontEnd web developer
          from India, currently working at{' '}
          <a className="about__link" href="https://timeless.co">
            timeless.co
          </a>{' '}
          as a FrontEnd engineer. I tend to make use of modern web technologies
          to build websites that look great, feel fantastic, and function
          correctly. I am especially focusing on Reactjs.
          <br />
          <br />
          I'm also a certified graphic designer from "Ramakrishna Mission
          Shilpamandira". I also do Graphic and UI designing. Since I love both
          programming and designing, I'm also interested in creating
          programmatic designs and creative coding projects.
        </p>
      </AboutInfo>

      <Flex justify="space-between" className="quotes__wrapper">
        <Quote>
          <p>“Simplicity is the baddest choice to be the best.“</p>
        </Quote>
        <Quote>
          <p>
            “I know I’m not successful enough, but I’m passionate enough not to
            worry about success.“
          </p>
        </Quote>
        <Quote>
          <p>
            “Creativity is the driver of an unstoppable train called Passion.”
          </p>
        </Quote>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
