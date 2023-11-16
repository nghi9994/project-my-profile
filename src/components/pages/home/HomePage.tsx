import * as S from "./HomePage.styles";

import { HAND_ICON_URL, PROFILE_URL } from "@/constants";
import {
  Button,
  Container,
  Divider,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC, HTMLAttributes } from "react";
import { BiMouse } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa6";
import { PiPaperPlaneTilt } from "react-icons/pi";

interface HomePageProps extends HTMLAttributes<HTMLDivElement> {}

export const HomePage: FC<HomePageProps> = ({ children, ...props }) => {
  return (
    <Container id="home" variant="pageLayout" {...props}>
      <Stack
        className="home__content"
        height={"100%"}
        gap={6}
        position="relative"
        alignItems="center"
        flexDirection={{ base: "column-reverse", sm: "row" }}
      >
        <Stack
          className="home__left"
          flex={1}
          alignItems={"flex-start"}
          gap={5}
        >
          <Stack direction="row" width="100%" alignItems="center" gap={4}>
            <Text
              color="default.title"
              fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
              fontWeight="bold"
              whiteSpace="nowrap"
            >
              Nghi Nguyen
            </Text>
            <Image src={HAND_ICON_URL} alt="hand-icon" />
          </Stack>

          <Stack direction="row" width="100%" alignItems="center" gap={4}>
            <Divider
              borderBottomWidth={2}
              display={{ base: "none", md: "block" }}
              width={{ base: 0, sm: "50px" }}
            />
            <Text
              color="default.titleDark"
              fontSize={{ base: "xl", md: "2xl" }}
              whiteSpace={{ base: "unset", md: "nowrap" }}
            >
              Frontend Software Engineer
            </Text>
          </Stack>
          <Text color="default.text" fontSize={{ base: "sm", sm: "md" }}>
            I'm software engineer based in Ho Chi Minh city, and I'm very
            passionate and dedicated to my work.
          </Text>

          <Button
            as="a"
            href="#contact"
            marginTop={{ base: 5, sm: 10 }}
            rightIcon={<PiPaperPlaneTilt color="white" size={25} />}
            transform={{ base: "scale(0.8)", sm: "none" }}
            transformOrigin="left"
          >
            Say Hello
          </Button>
        </Stack>

        <Stack className="home__right" flex={1}>
          <S.ProfileImage
            src={PROFILE_URL}
            alt="My Profile"
            borderRadius="full"
            boxSize={{ base: 300, md: 400 }}
            boxShadow="dark-lg"
            margin="auto"
            objectFit="cover"
          />
        </Stack>
      </Stack>

      <S.MouseWrapper
        display={{ base: "none", sm: "flex" }}
        flexDirection="row"
        alignItems="center"
        position="absolute"
        left={30}
        bottom={50}
      >
        <BiMouse size={50} /> <Text>Scroll Down</Text>{" "}
        <FaArrowDown className="arrow-down" size={20} />
      </S.MouseWrapper>
    </Container>
  );
};
