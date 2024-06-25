import React from 'react';
import { Box, Image, Text, Button, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={product.image} alt={product.name} />
      <VStack p={4} align="start">
        <Text fontWeight="bold" fontSize="xl">{product.name}</Text>
        <Text>${product.price}</Text>
        <Button as={Link} to={`/product/${product.id}`} colorScheme="blue">
          View Details
        </Button>
      </VStack>
    </Box>
  );
};

export default ProductCard;