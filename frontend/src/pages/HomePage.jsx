import {
  Container,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { IoFishSharp } from "react-icons/io5";
import { GiFishingBoat } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useProductStore } from "@/store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { quryProduct, products } = useProductStore();

  useEffect(() => {
    quryProduct();
  }, [quryProduct]);
  console.log(products);

  return (
    <Container maxW="container.xl" py={12}>
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
      <VStack>
        <HStack>
          <Text
            fontSize="40px"
            fontWeight="extrabold"
            bgGradient="linear(to-r,rgb(120, 199, 247),rgb(136, 135, 247))"
            bgClip="text"
          >
            Avalivale Fish
          </Text>
          <Icon
            as={IoFishSharp}
            boxSize={20}
            sx={{
              path: {
                fill: "url(#fishBowlGradient)",
              },
            }}
          />
        </HStack>
        <SimpleGrid
          column={{ base: 1, md: 2, lg: 3 }}
          spacing={"15"}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <HStack>
            <Text fontSize={"20"} textAlign={"center"} fontWeight={"bold"}>
              No Fish In Stock.
            </Text>
            <Icon
              as={GiFishingBoat}
              boxSize={20}
              sx={{
                path: {
                  fill: "url(#fishBowlGradient)",
                },
              }}
            />
            <Text
              fontSize={"20"}
              textAlign={"center"}
              fontWeight={"bold"}
              bgGradient="linear(to-r,rgb(120, 199, 247),rgb(136, 135, 247))"
              bgClip="text"
            >
              <Link to={"/create"}>Click To Create</Link>
            </Text>
          </HStack>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
