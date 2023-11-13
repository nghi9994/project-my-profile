import * as S from "./Navbar.styles";

import { Container, HStack, Link } from "@chakra-ui/react";
import { Hooks } from "minimist-react-library";
import { FC, HTMLAttributes, useEffect } from "react";

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {}

export const Navbar: FC<NavbarProps> = ({ className, children, ...props }) => {
  const isScrolling = Hooks.Device.useScroll();

  return (
    <Container
      id="navbar"
      className={className}
      position="fixed"
      top={0}
      left={0}
      right={0}
      background={"#fff"}
      boxShadow={isScrolling ? "sm" : "none"}
      maxW={"100vw"}
      padding={0}
      zIndex={1}
      {...props}
    >
      <HStack
        justifyContent={"space-between"}
        maxW={"container.lg"}
        padding={"16px 48px"}
        margin="auto"
      >
        <S.NavItem>
          <Link href="#home">Nghi Nguyen</Link>
        </S.NavItem>
        <HStack spacing={5}>
          <S.NavItem>
            <Link href="#home">Home</Link>
          </S.NavItem>
          <S.NavItem>
            <Link href="#about">About</Link>
          </S.NavItem>
          <S.NavItem>
            <Link href="#skills">Skills</Link>
          </S.NavItem>
          <S.NavItem>
            <Link href="#contact">Contact</Link>
          </S.NavItem>
        </HStack>
      </HStack>
    </Container>
  );
};
