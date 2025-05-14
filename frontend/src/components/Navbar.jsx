import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaRegSquarePlus } from "react-icons/fa6";
import GradientText from "./gradienttext.jsx";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize="36px"
          fontWeight="extrabold"
          bgGradient="linear(to-r,rgb(120, 199, 247),rgb(136, 135, 247))"
          bgClip="text"
        >
          <Link to="/"> DODO Aquarium</Link>
        </Text>

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
