import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ProductCard({ img = "https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-12.png",bgColor="lightblue" ,  title = "Not given", quantity = 0 }) {
    return (
        <Card className='product' sx={{ maxWidth: 200 }} style={{backgroundColor:`${bgColor}`}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={img}
                    alt="green iguana"
                />
                <CardContent style={{textAlign:"center"}}>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {quantity+" items"}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ProductCard