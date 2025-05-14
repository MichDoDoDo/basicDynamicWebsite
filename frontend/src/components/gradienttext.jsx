import { Text } from "@chakra-ui/react";

const GradientText = () => {
  return (
    <Text
      fontSize="32px"
      fontWeight="extrabold"
      bgGradient="linear(to-r, teal.500, pink.500)"
      bgClip="text"
    >
      Fish Store
    </Text>
  );
};

export default GradientText;
