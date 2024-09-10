import React from "react";
import {
  PaddingContainer,
  Heading,
  BlueText,
  FlexContainer,
  Button,
} from "../styles/Global.styled";

import { motion } from "framer-motion";

import { ContactForm, FormLabel, FormInput } from "../styles/Footer.styled";

import { fedeInBottomVariant } from "../utils/Variants";

const Footer = () => {
  return (
    <PaddingContainer id="Contact" top="5%" bottom="10%">
      <Heading
        as={motion.h4}
        variants={fedeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        siz="h4"
        align="center"
      >
        My Contact
      </Heading>
      <Heading
        as={motion.h2}
        variants={fedeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
        top="0.5rem"
      >
        Contact <BlueText>Me Here</BlueText>{" "}
      </Heading>
      <PaddingContainer top="3rem">
        <FlexContainer justify="center">
          <ContactForm
            as={motion.form}
            variants={fedeInBottomVariant}
            initial="hidden"
            whileInView="visible"
          >
            <PaddingContainer bottom="2rem">
              <FormLabel>Name</FormLabel>
              <FormInput type="text" placeholder="Enter Your name"></FormInput>
            </PaddingContainer>

            <PaddingContainer bottom="2rem">
              <FormLabel>Email:</FormLabel>
              <FormInput type="text" placeholder="Enter Your email"></FormInput>
            </PaddingContainer>

            <PaddingContainer bottom="2rem">
              <FormLabel>Message:</FormLabel>
              <FormInput
                as="textarea"
                placeholder="Enter Your message"
              ></FormInput>
            </PaddingContainer>
            <FlexContainer justify="center" responsiveFlex>
              <Button>Send Message</Button>
            </FlexContainer>
          </ContactForm>
        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  );
};

export default Footer;
