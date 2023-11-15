import * as S from "./BottomNavbar.styles";

import { FC, HTMLAttributes } from "react";
import { Box, ContainerProps, Link, Stack, Text } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

interface BottomNavbarProps extends ContainerProps {
  navItems: any[];
  toggleModal?: Function;
}

export const BottomNavbar: FC<BottomNavbarProps> = ({
  className,
  children,
  navItems,
  toggleModal,
  ...props
}) => {
  return (
    <S.Wrapper className={className} padding="15px 0" {...props}>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="space-around"
        margin="auto"
        gap="15px 5px"
      >
        {navItems.map((item) => (
          <Stack
            key={item.name}
            alignItems="center"
            justifyContent="flex-start"
            gap="2px"
            width={"30%"}
          >
            {item.icon}
            <Link href={item.href}>
              <Text fontSize="xs">{item.name}</Text>
            </Link>
          </Stack>
        ))}
        <Box width={"30%"}></Box>
        <Box width={"30%"}></Box>
        <Box width={"30%"}></Box>
        <Box width={"30%"}></Box>

        <Stack
          alignItems="center"
          cursor="pointer"
          onClick={() => toggleModal && toggleModal()}
          width={"30%"}
        >
          <IoClose size={20} />
        </Stack>
      </Stack>
    </S.Wrapper>
  );
};
