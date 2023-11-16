import { HAND_ICON_URL, PROFILE_URL } from "@/constants";
import {
  Button,
  Center,
  Container,
  ContainerProps,
  Divider,
  Image,
  keyframes,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { BiMouse } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa6";
import { PiPaperPlaneTilt } from "react-icons/pi";

interface HomePageProps extends ContainerProps {}

const profileAnimate = keyframes`
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
`;

const profileAnimation = `${profileAnimate} 8s ease-in-out infinite alternate;`;

const downAnimate = keyframes`
    0% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(3px);
    }
`;

const arrowAnimation = `${downAnimate} 0.8s ease-in-out infinite alternate;`;

export const HomePage: FC<HomePageProps> = (props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <Container id="home" variant="pageLayout" {...props}>
      {/* Content section */}
      <Stack
        className="home__content"
        height={"100%"}
        gap={6}
        position="relative"
        alignItems="center"
        flexDirection={{ base: "column-reverse", sm: "row" }}
      >
        {/* Left side */}
        <Stack
          className="home__left"
          flex={1}
          alignItems={"flex-start"}
          gap={5}
        >
          <Stack direction="row" width="100%" alignItems="center" gap={4}>
            <Text variant="title" whiteSpace="nowrap">
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
              variant="subtitle"
              color="default.titleDark"
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

        {/* Right side */}
        <Center className="home__right" flex={1}>
          <Image
            display={isImageLoaded ? "block" : "none"}
            onLoad={() => setIsImageLoaded(true)}
            animation={profileAnimation}
            boxSize={{ base: 300, md: 400 }}
            boxShadow="dark-lg"
            objectFit="cover"
            margin="auto"
            src={PROFILE_URL}
            fallbackSrc="https://via.placeholder.com/150"
            alt="My Profile"
            borderRadius="full"
          />
        </Center>
      </Stack>

      {/* Arrow down section */}
      <Stack
        display={{ base: "none", sm: "flex" }}
        flexDirection="row"
        alignItems="center"
        position="absolute"
        left={30}
        bottom={50}
        sx={{
          ".arrow-down": {
            animation: arrowAnimation,
          },
        }}
      >
        <BiMouse size={50} /> <Text>Scroll Down</Text>{" "}
        <FaArrowDown className="arrow-down" size={20} />
      </Stack>
    </Container>
  );
};
