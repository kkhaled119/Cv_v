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

import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";
import {
  ShowcaseImageCard,
  Particle,
  ShowcaseParticleContainer,
} from "../styles/ShowCase.styled";

import showcase from "../assets/khaled2.png";
import BackgroundImg from "../assets/particle.png";
const ShowCase = () => {
  return (
    <PaddingContainer
      id="Home"
      left="3%"
      right="10%"
      top="18%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem"
    >
      <FlexContainer align="flex-start" justify="flex-start">
        {/*--Left Container-- */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <Heading size="h4">Hello</Heading>
          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            I'm <BlueText>Khalied Mahran</BlueText>
          </Heading>
          <Heading as="h3" size="h3">
            I'm a <BlueText>Frontend Developer</BlueText>
          </Heading>
          <ParaText as="p" top="2rem" bottom="4rem" style={{ maxWidth: 900 }}>
            I am a software engineer with over two years of experience,
            specializing in web and mobile application development. I work with
            React to build interactive user interfaces and React Native for
            high-performance mobile applications. I excel at turning ideas into
            efficient and user-friendly software solutions. I am always looking
            to enhance my skills and explore new challenges in the tech
            industry.
          </ParaText>
          {/*--social-icons */}
          <FlexContainer gap="20px" responsiveFlex>
            <IconContainer color="white" size="1.5rem">
              <a
                href="https://www.linkedin.com/in/khaled-mahran-bbb532288/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <BsLinkedin />
              </a>
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <a
                href="https://github.com/kkhaled119"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                <BsGithub />
              </a>
            </IconContainer>

            <IconContainer color="white" size="1.5rem">
              <a
                href="https://www.facebook.com/share/pSbmuggxoWkYwvnG/?mibextid=qi2Omg"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                <BsFacebook />
              </a>
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <a
                href="https://www.instagram.com/khalied__mahran?igsh=MXgzYzJyYmFlajcxOA=="
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                <BsInstagram />
              </a>
            </IconContainer>
          </FlexContainer>
        </motion.div>
        {/**--right-content */}
        <FlexContainer
          justify="flex-end"
          as={motion.div}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <img
                src={showcase}
                alt="k"
                style={{ width: "320px", background: "white" }}
              />
            </ShowcaseImageCard>
            <Particle
              as={motion.img}
              animate={{ x: [0, 100, 0], rotate: 360, scale: [1, 0.5, 1] }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              src={BackgroundImg}
              alt="particle"
              top="-80px"
              left="20px"
              rotate="60deg"
            />

            <Particle
              as={motion.img}
              animate={{ x: [0, 100, 0], rotate: 360, scale: [1, 0.5, 1] }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              src={BackgroundImg}
              alt="particle"
              top="50px"
              right="-70px"
              rotate="0deg"
            />

            <Particle
              as={motion.img}
              animate={{ x: [0, 100, 0], rotate: 360, scale: [1, 0.9, 1] }}
              transition={{
                duration: 15,
                repeat: Infinity,
              }}
              src={BackgroundImg}
              alt="particle"
              bottom="10px"
              left="-70px"
              rotate="50deg"
            />
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default ShowCase;
