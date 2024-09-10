import React from "react";
import { motion } from "framer-motion";

import {
  PaddingContainer,
  Heading,
  BlueText,
} from "../styles/Global.styled.js";

import { projectDetails } from "../utils/Data.js";
import Project from "../components/layouts/Project.js";

import { feedInTopVariant } from "../utils/Variants.js";

const MyProject = () => {
  return (
    <PaddingContainer
      id="Projects"
      top="5%"
      bottom="5%"
      responsiveTop="20%"
      responsiveLft="1rem"
      responsiveRight="1rem"
    >
      <Heading
        as={motion.h4}
        variants={feedInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
      >
        MY PROJECTS
      </Heading>
      <Heading
        as={motion.h2}
        variants={feedInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
      >
        What <BlueText>I have built</BlueText>
      </Heading>
      {projectDetails.map((project) => (
        <PaddingContainer key={project.id} top="5rem" bottom="5rem">
          <Project data={project} />
        </PaddingContainer>
      ))}
    </PaddingContainer>
  );
};

export default MyProject;
