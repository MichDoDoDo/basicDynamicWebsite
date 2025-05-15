import React from "react";
import {
  Box,
  Heading,
  Image,
  VStack,
  Text,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const ProductCard = ({ product }) => {
  const cardTextColor = useColorModeValue("gray.700", "white");
  const cardBackgroundColor = useColorModeValue("white", "gray.700");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={cardBackgroundColor}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={"50"}
        w={"full"}
        objectFit={"cover"}
      ></Image>
      <Box>
        <VStack>
          <Heading as={"h3"} size={"md"} mb={2}>
            Name: {product.name}
          </Heading>
          <Text
            fontSize={"lg"}
            fontWeight={"bold"}
            
            textColor={cardTextColor}
          >
            Stock: {product.quantity}
          </Text>
          <Text
            fontSize={"lg"}
            fontWeight={"bold"}
            
            textColor={cardTextColor}
          >
            Price: ${product.price}
          </Text>
          <Text
            fontSize={"sm"}
            fontWeight={"bold"}
            
            textColor={cardTextColor}
          >
            dsc: {product.description}
          </Text>
        </VStack>
        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme="blue" />
          <IconButton
            icon={<DeleteIcon />}
            onClick={() => handleDeleteProduct(product._id)}
            colorScheme="red"
          />
        </HStack>
      </Box>
      
    </Box>
  );
};

export default ProductCard;
