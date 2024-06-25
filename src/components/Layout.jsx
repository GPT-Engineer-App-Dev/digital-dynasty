import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, searchQuery, updateSearchQuery }) => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar searchQuery={searchQuery} updateSearchQuery={updateSearchQuery} />
      <Box flex={1}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;