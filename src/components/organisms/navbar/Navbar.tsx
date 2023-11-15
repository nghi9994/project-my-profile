import * as S from "./Navbar.styles";

import { BottomNavbar } from "@/components";
import { useDevice } from "@/hooks";
import { Box, Container, HStack, Link } from "@chakra-ui/react";
import { Hooks } from "minimist-react-library";
import { FC, HTMLAttributes } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { PiHouse } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoDocumentTextOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {}

export const Navbar: FC<NavbarProps> = ({ className, children, ...props }) => {
  const [isShowBottomNavbar, toggleBottomNavbar] = Hooks.Data.useToggle(false);

  const isScrolling = Hooks.Window.useScrolling();
  const { isMobile } = useDevice();

  const navItems = [
    {
      icon: <GoHome size={20} />,
      name: "Home",
      href: "#home",
    },
    {
      icon: <CgProfile size={20} />,
      name: "About",
      href: "#about",
    },
    {
      icon: <IoDocumentTextOutline size={20} />,
      name: "Skills",
      href: "#skills",
    },
    {
      icon: <VscSend size={20} />,
      name: "Contact",
      href: "#contact",
    },
  ];

  const customStyles = isMobile
    ? { left: 0, right: 0, bottom: 0 }
    : {
        left: 0,
        right: 0,
        top: 0,
      };

  return (
    <Container
      id="navbar"
      className={className}
      position="fixed"
      background={"#fff"}
      boxShadow={isScrolling ? "sm" : "none"}
      maxW={"100vw"}
      padding={0}
      zIndex={1}
      {...customStyles}
      {...props}
    >
      <HStack
        justifyContent={"space-between"}
        maxW={"container.lg"}
        padding={isMobile ? "16px 24px" : "16px 48px"}
        margin="auto"
      >
        <S.NavItem>
          <Link href="#home" aria-label="home">
            <PiHouse size={20} />
          </Link>
        </S.NavItem>

        {isMobile ? (
          <Box onClick={toggleBottomNavbar} cursor="pointer">
            <CgMenuMotion size={20} />
          </Box>
        ) : (
          <HStack spacing={8}>
            {navItems.map((item) => (
              <S.NavItem key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </S.NavItem>
            ))}
          </HStack>
        )}
      </HStack>

      <BottomNavbar
        transform={isShowBottomNavbar ? "translateY(0px)" : "translateY(200px)"}
        navItems={navItems}
        toggleModal={toggleBottomNavbar}
      />
    </Container>
  );
};
