import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <ChakraProvider>
      <Router>
        <Layout searchQuery={searchQuery} updateSearchQuery={updateSearchQuery}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products searchQuery={searchQuery} />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </Router>
    </ChakraProvider>
  );
}

export default App;