import React from 'react';
import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md" as={Link} to="/">ElectroShop</Heading>
        <Spacer />
        <Button as={Link} to="/products" colorScheme="blue" variant="ghost" mr={3}>
          Products
        </Button>
        <Button colorScheme="blue" leftIcon={<FaShoppingCart />}>
          Cart
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;