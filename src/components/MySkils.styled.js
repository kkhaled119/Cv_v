import React from "react";
import { motion } from "framer-motion";

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  IconContainer,
  BlueText,
} from "../styles/Global.styled";

import { SkillsCardContainer, SkillsCard } from "../styles/MySkills.styled";
import { Skills } from "../utils/Data";

const MySkills = () => {
  return (
    <PaddingContainer
      id="Skills"
      top="10%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FlexContainer
        responsiveFlex
        fullwidthchild
        responsiveDirection="column-reverse"
      >
        <SkillsCardContainer
          as={motion.div}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
        >
          {Skills.map(
            (
              skill,
              index // إضافة key
            ) => (
              <SkillsCard key={index}>
                <IconContainer size="5rem" color="blue">
                  {skill.icon}
                </IconContainer>
                <Heading as="h4" size="h4">
                  {skill.tech}
                </Heading>
              </SkillsCard>
            )
          )}
        </SkillsCardContainer>

        {/*--right-section */}
        <motion.div
          as={motion.div}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <Heading as="h4" size="h4">
            MY SKILLS
          </Heading>
          <Heading as="h2" size="h2" top="0.5rem">
            Whate <BlueText>I can do</BlueText>
          </Heading>
          <ParaText top="2rem" bottom="1.5rem">
            I am a web and mobile app developer with expertise in React and
            React Native. I specialize in creating dynamic and responsive user
            interfaces, ensuring a seamless experience across all devices. My
            focus is on writing clean, efficient code, and I excel at building
            high-quality, well-structured websites and mobile applications. With
            a strong eye for design, I ensure that my projects are visually
            appealing and optimized for all screen sizes, delivering a
            user-friendly and visually engaging experience.
          </ParaText>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default MySkills;
