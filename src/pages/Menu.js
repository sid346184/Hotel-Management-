import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { MenuList } from '../data/data';
import '../styles/MenuStyles.css'

const Menu = () => {
  const [quantities, setQuantities] = useState(MenuList.map(() => 0));

  const handleBuyNow = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const handleDecrease = (index) => {
    if (quantities[index] > 0) {
      const newQuantities = [...quantities];
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  };

  const calculateTotalBill = () => {
    let totalBill = 0;
    MenuList.forEach((menu, index) => {
      totalBill += menu.price * quantities[index];
    });
    return totalBill;
  };

  return (
    <Layout>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {MenuList.map((menu, index) => (
          <Card key={index} sx={{ maxWidth: '400px', display: 'flex', m: 2 }}>
            <CardActionArea>
              <CardMedia sx={{ minHeight: '400px' }} component={'img'} src={menu.image} alt={menu.name} />
              <CardContent>
                <Typography variant="h5" gutterBottom={'div'}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Typography>
                  Rs. {menu.price}
                  <Box>
                    <button id='buy-now' onClick={() => handleBuyNow(index)}>Buy now</button>
                    <span>                    Quantity Ordered: {quantities[index]}                                </span>
                    <button id='minus' onClick={() => handleDecrease(index)}>-</button>
                  </Box>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <button id='generate-bill' onClick={() => alert(`Total Bill: Rs. ${calculateTotalBill()}`)}>Generate Bill</button>
      </Box>
    </Layout>
  );
};

export default Menu;
