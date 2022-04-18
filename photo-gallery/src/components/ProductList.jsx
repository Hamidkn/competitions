import React, {useState} from 'react'
import { Button, Stack} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ImageListItem, Typography } from '@mui/material'
import IosShareIcon from '@mui/icons-material/IosShare';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Fab from '@mui/material/Fab';

export const ProductCard = ({ item }) => {
    return (
        <Stack direction='column' width='100%'
            sx={{
                borderRadius: '20px',
                position: 'absolute',
                left: '0px',
                top: '0px',
                backgroundColor: '#00000075',
                height: '100%',
                justifyContent: 'space-between', alignItems: 'center'
            }}>
            <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: '', width: '100%' }}>
                <Button sx={{ margin: '10px', color: 'white', fontWeight: '700', justifyContent: 'space-between', alignItems: 'center' }}><KeyboardArrowDownIcon /></Button>
                <Button variant='contained' color='error' sx={{ margin: '10px', borderRadius: '20px !important', textTransform: 'none' }}>Save</Button>
            </Stack>
            <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: '', width: '100%' }}>
                <a  href={item.canonical_url} style={{ textDecoration: 'none' }} >
                <Button variant='contained' color='warning' sx={{ margin: '10px', borderRadius: '20px !important',
                 textTransform: 'none' }}>
                 <ArrowForwardIcon style={{transform: 'rotate(-45deg)'}}/>
                 {item.url.substring(8, 16)}</Button>
                </a>

                <Fab><IosShareIcon /></Fab>
                <Fab><MoreHorizIcon /></Fab>
            </Stack>
        </Stack>
    )
}

export const ProductItem = ({ item }) => {
  const [mouseHover, setMouseHover] = useState(false);

  return (
      <div
        onMouseEnter={() => setMouseHover(true)}
        onMouseLeave={() => setMouseHover(false)}
      >
        <ImageListItem key={item.image_url} sx={{ boxShadow: 0 }} >
          <img style={{ borderRadius: '20px' }}
            src={`${item.image_url}?w=248&fit=crop&auto=format`}
            alt={item.name}
            loading="lazy"/>
          
          {mouseHover ? <ProductCard item={item}/> : ""}
        </ImageListItem>
        <Typography sx={{padding:'10px'}}>{item.name}</Typography> 
      </div>
  )
}