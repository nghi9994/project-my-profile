import { Container, Image, Stack } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Wrapper = styled(Container)``;

export const ProfileImage = styled(Image)`
  animation: profile__animate 8s ease-in-out 1s infinite alternate;

  @keyframes profile__animate {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }
`;

export const MouseWrapper = styled(Stack)`
  .arrow-down {
    animation: down__animate 0.8s ease-in-out infinite alternate;
  }

  @keyframes down__animate {
    0% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(3px);
    }
  }
`;
