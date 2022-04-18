import React from 'react'
import { ProductCard } from './ProductList';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';


export const Products = ({ data }) => {
    return (
        <Box
            ml={10} mr={10}>
            <ImageList variant="masonry" gap={8}>
                    {data.map((item) => (
                        <ProductCard item={item} />
                    ))}     
            </ImageList>
        </Box>
    )
}
