import React, { useState } from 'react';
import { Box, Flex, Heading, Spacer, Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md" as={Link} to="/">ElectroShop</Heading>
        <InputGroup maxWidth="300px" mr={3}>
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </InputGroup>
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