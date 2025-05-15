import React, { useState } from "react";
import {
  Box,
  Heading,
  Image,
  VStack,
  Text,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useProductStore } from "@/store/product";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const cardTextColor = useColorModeValue("gray.700", "white");
  const cardBackgroundColor = useColorModeValue("white", "gray.700");
  const toast = useToast();
  const { deleteProduct, updateProduct } = useProductStore();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast({
        title: "Fail",
        description: message,
        status: "Fail",
        duration: 8000,
        isClosable: true,
      });
    }
    toast({
      title: "Success",
      description: message,
      status: "success",
      duration: 8000,
      isClosable: true,
    });
  };
  const handleUpdatedProduct = async (pid, updatedProduct) => {
    await updateProduct(pid, updatedProduct);
    onClose();
  };
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
        h={"300"}
        w={"full"}
        objectFit={"cover"}
      ></Image>
      <Box>
        <VStack>
          <Heading as={"h3"} size={"md"} mb={2}>
            Name: {product.name}
          </Heading>
          <Text fontSize={"lg"} fontWeight={"bold"} textColor={cardTextColor}>
            Stock: {product.quantity}
          </Text>
          <Text fontSize={"lg"} fontWeight={"bold"} textColor={cardTextColor}>
            Price: ${product.price}
          </Text>
          <Text fontSize={"sm"} fontWeight={"bold"} textColor={cardTextColor}>
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Input
                placeholder="Item name"
                name="name"
                value={updatedProduct.name}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
              ></Input>
              <Input
                placeholder="Item Quantity"
                name="quantity"
                type="number"
                value={updatedProduct.quantity}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    quantity: e.target.value,
                  })
                }
              ></Input>
              <Input
                placeholder="Item Price"
                name="price"
                type="number"
                value={updatedProduct.price}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, price: e.target.value })
                }
              ></Input>
              <Input
                placeholder="Item Category"
                name="category"
                value={updatedProduct.category}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    category: e.target.value,
                  })
                }
              ></Input>
              <Input
                placeholder="Item Image URL"
                name="image"
                value={updatedProduct.image}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, image: e.target.value })
                }
              ></Input>
              <Input
                placeholder="Item Description"
                name="description"
                value={updatedProduct.description}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updateProduct,
                    description: e.target.value,
                  })
                }
              ></Input>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleUpdatedProduct(product._id, updatedProduct)}
            >
              Update Item
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;
