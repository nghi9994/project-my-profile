import * as S from "./Navbar.styles";

import { Container, HStack, Link } from "@chakra-ui/react";
import { Hooks } from "minimist-react-library";
import { FC, HTMLAttributes, useEffect } from "react";

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {}

export const Navbar: FC<NavbarProps> = ({ className, children, ...props }) => {
  const isScrolling = Hooks.Device.useScroll();

  const navItems = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

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
          <Link href="#home">Nghi</Link>
        </S.NavItem>
        <HStack spacing={8}>
          {navItems.map((item) => (
            <S.NavItem key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </S.NavItem>
          ))}
        </HStack>
      </HStack>
    </Container>
  );
};
