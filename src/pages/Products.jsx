import React from 'react';
import { Box, SimpleGrid, Heading } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';

const sampleProducts = [
  { id: 1, name: 'Smartphone X', price: 799, image: 'https://source.unsplash.com/random/300x300/?smartphone' },
  { id: 2, name: 'Laptop Pro', price: 1299, image: 'https://source.unsplash.com/random/300x300/?laptop' },
  { id: 3, name: 'Wireless Earbuds', price: 149, image: 'https://source.unsplash.com/random/300x300/?earbuds' },
  { id: 4, name: 'Smart Watch', price: 299, image: 'https://source.unsplash.com/random/300x300/?smartwatch' },
  { id: 5, name: 'Tablet Ultra', price: 499, image: 'https://source.unsplash.com/random/300x300/?tablet' },
  { id: 6, name: 'Gaming Console', price: 399, image: 'https://source.unsplash.com/random/300x300/?gaming-console' },
];

const Products = () => {
  return (
    <Box maxWidth="1200px" margin="auto" p={8}>
      <Heading as="h1" size="xl" mb={8}>Our Products</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;