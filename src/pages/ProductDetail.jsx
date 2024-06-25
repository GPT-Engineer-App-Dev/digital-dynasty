import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, Button, VStack, HStack, Heading, Badge } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

const sampleProducts = [
  { id: 1, name: 'Smartphone X', price: 799, image: 'https://source.unsplash.com/random/600x400/?smartphone', description: 'A powerful smartphone with advanced features.', category: 'Phones', rating: 4.5 },
  { id: 2, name: 'Laptop Pro', price: 1299, image: 'https://source.unsplash.com/random/600x400/?laptop', description: 'High-performance laptop for professionals.', category: 'Computers', rating: 4.8 },
  { id: 3, name: 'Wireless Earbuds', price: 149, image: 'https://source.unsplash.com/random/600x400/?earbuds', description: 'Crystal-clear audio with long battery life.', category: 'Audio', rating: 4.2 },
  { id: 4, name: 'Smart Watch', price: 299, image: 'https://source.unsplash.com/random/600x400/?smartwatch', description: 'Stay connected with this feature-packed smartwatch.', category: 'Wearables', rating: 4.0 },
  { id: 5, name: 'Tablet Ultra', price: 499, image: 'https://source.unsplash.com/random/600x400/?tablet', description: 'Versatile tablet for work and entertainment.', category: 'Computers', rating: 4.6 },
  { id: 6, name: 'Gaming Console', price: 399, image: 'https://source.unsplash.com/random/600x400/?gaming-console', description: 'Next-gen gaming console for immersive gameplay.', category: 'Gaming', rating: 4.7 },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <Box>Product not found</Box>;
  }

  return (
    <Box maxWidth="1200px" margin="auto" p={8}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl">{product.name}</Heading>
        <HStack spacing={8} align="start">
          <Image src={product.image} alt={product.name} borderRadius="md" maxWidth="500px" />
          <VStack align="start" spacing={4}>
            <Text fontSize="2xl" fontWeight="bold">${product.price}</Text>
            <Badge colorScheme="blue" fontSize="md">{product.category}</Badge>
            <HStack>
              <FaStar color="gold" />
              <Text>{product.rating.toFixed(1)}</Text>
            </HStack>
            <Text fontSize="lg">{product.description}</Text>
            <Button colorScheme="blue" size="lg">Add to Cart</Button>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProductDetail;