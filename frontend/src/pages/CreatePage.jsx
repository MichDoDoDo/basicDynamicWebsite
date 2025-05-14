import { useProductStore } from "@/store/product";
import {
  Box,
  Heading,
  Input,
  useColorModeValue,
  VStack,
  Container,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    quantity: "",
    category: "",
    image: "",
  });

  const { createProduct } = useProductStore();
  const handleAddProduct = async () => {
    console.log("pressed button")
    const { success, message } = await createProduct(newProduct);
    console.log("Success:", success);
    console.log("Message:", message);
  };
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create Product
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="Item name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            ></Input>
            <Input
              placeholder="Item Quantity"
              name="quantity"
              type="number"
              value={newProduct.quantity}
              onChange={(e) =>
                setNewProduct({ ...newProduct, quantity: e.target.value })
              }
            ></Input>
            <Input
              placeholder="Item Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            ></Input>
            <Input
              placeholder="Item Category"
              name="category"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
            ></Input>
            <Input
              placeholder="Item Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            ></Input>
            <Input
              placeholder="Item Description"
              name="description"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
            ></Input>
            <Button onClick={handleAddProduct} w={"full"}>
              Add Item
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
