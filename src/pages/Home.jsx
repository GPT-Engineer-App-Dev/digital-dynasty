import React from 'react';
import { Box, Heading, Text, Button, VStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box maxWidth="1200px" margin="auto" p={8}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl">Welcome to ElectroShop</Heading>
        <Text fontSize="xl" textAlign="center">
          Discover the latest in electronics and gadgets. From smartphones to laptops, we've got you covered!
        </Text>
        <Image src="https://source.unsplash.com/random/800x400/?electronics" alt="Electronics" borderRadius="md" />
        <Button as={Link} to="/products" colorScheme="blue" size="lg">
          Shop Now
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;