import { BottomNavbar } from "@/components";
import { useDevice } from "@/hooks";
import {
  Center,
  Container,
  ContainerProps,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Hooks } from "minimist-react-library";
import { FC } from "react";
import { CgMenuMotion, CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiHouse } from "react-icons/pi";
import { VscSend } from "react-icons/vsc";

interface NavbarProps extends ContainerProps {}

export const Navbar: FC<NavbarProps> = (props) => {
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

  return (
    <Container
      id="navbar"
      variant="navbar"
      boxShadow={isScrolling ? "default.bottomModal" : "none"}
      {...props}
    >
      {/* Content section */}
      <Flex
        className="navbar__content"
        justifyContent={"space-between"}
        margin="auto"
        maxW={"container.lg"}
        padding="15px 32px"
      >
        <Center className="navbar__left" as="a" href="#home" aria-label="home">
          <PiHouse size={20} />
        </Center>

        <Spacer className="navbar__spacer" />

        {isMobile ? (
          <Center as="button" onClick={toggleBottomNavbar}>
            <CgMenuMotion size={20} />
          </Center>
        ) : (
          <Flex className="navbar__right" gap={8}>
            {navItems.map((item) => (
              <Text
                key={item.name}
                className="navbar__item"
                as="a"
                href={item.href}
              >
                {item.name}
              </Text>
            ))}
          </Flex>
        )}
      </Flex>

      <BottomNavbar
        navItems={navItems}
        toggleModal={toggleBottomNavbar}
        transform={isShowBottomNavbar ? "translateY(0px)" : "translateY(200px)"}
      />
    </Container>
  );
};
