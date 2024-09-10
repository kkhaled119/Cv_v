import React from "react";
import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
} from "../../styles/Global.styled";
import { FaGithub } from "react-icons/fa";
import { ProjectImage, TechStackCard } from "../../styles/MyProject.styled";
import { ProjectImageContainer } from "../../styles/MyProject.styled";
import { motion } from "framer-motion";

const Project = ({ data }) => {
  return (
    <FlexContainer
      direction={data.reverse ? "row-reverse" : false}
      fullwidthchild
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
      >
        <FlexContainer align="cente" gap="1rem">
          <Heading as="h3" size="h3" bottom="1rem">
            {data.project_name}
          </Heading>
          <IconContainer color="blue" size="2rem">
            <a
              href={data.gitHubLinks}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <FaGithub />
            </a>
          </IconContainer>
        </FlexContainer>
        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem">
            {data.tech_stack.map((stack) => (
              <TechStackCard>{stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>
        <ParaText top="1.5rem" bottom="2rem">
          {data.project_desc}
        </ParaText>

        <a href={data.link_website}>
          <Button>Visit Website</Button>
        </a>
      </motion.div>
      {/*--right-section-project-- */}

      <ProjectImageContainer justify={data.reverse ? "flex-start" : "flex-end"}>
        <ProjectImage src={data.project_img} alt={data.project_name} />
      </ProjectImageContainer>
    </FlexContainer>
  );
};

export default Project;
