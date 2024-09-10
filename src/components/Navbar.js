import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlexContainer,
  PaddingContainer,
  Container,
  BlueText,
} from "../styles/Global.styled";
import NavMenu from "./layouts/NavMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { theme } from "../utils/Them";
import { NavbarContainer, Logo, MenuIcon } from "../styles/Navbar.styled";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onscroll = () => {
      window.pageXOffset > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  return (
    <NavbarContainer bgColor={sticky ? theme.colors.primary : "transparent"}>
      <PaddingContainer
        top="1.2rem"
        bottom="1.2rem"
        responsiveLeft="1rem"
        responsiveRight="1rem"
      >
        <Container>
          <FlexContainer justify="space-between" responsiveFlex>
            {/**left-log */}
            <Logo>
              Just<BlueText>ADev</BlueText>
            </Logo>
            {/*--right-menu-icon */}
            <MenuIcon
              as={motion.a}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                setOpenMenu(true);
              }}
            >
              <GiHamburgerMenu />
            </MenuIcon>
          </FlexContainer>
        </Container>
        <AnimatePresence>
          {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
        </AnimatePresence>
      </PaddingContainer>
    </NavbarContainer>
  );
};

export default Navbar;
