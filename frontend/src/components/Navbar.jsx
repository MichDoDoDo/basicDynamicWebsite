import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
  Icon
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { GiAquarium } from "react-icons/gi";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <svg width="0" height="0">
        <defs>
          <linearGradient
            id="fishBowlGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgb(120, 199, 247)" />
            <stop offset="100%" stopColor="rgb(136, 135, 247)" />
          </linearGradient>
        </defs>
      </svg>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <HStack>
          <Icon
            as={GiAquarium}
            boxSize={20}
            sx={{
              path: {
                fill: "url(#fishBowlGradient)",
              },
            }}
          />
          <Text
            fontSize="40px"
            fontWeight="extrabold"
            bgGradient="linear(to-r,rgb(120, 199, 247),rgb(136, 135, 247))"
            bgClip="text"
          >
            <Link to="/"> DODO Aquarium</Link>
          </Text>
        </HStack>
        <HStack alignItems={"center"}>
          <Link to="/create">
            <Button>
              <FaRegSquarePlus />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {" "}
            {colorMode === "light" ? <FaLightbulb /> : <FaRegLightbulb />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
