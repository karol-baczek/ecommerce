import React from "react";
import { Grid } from "@material-ui/core";

import Product from './Product/Product'

const products =[
    {id: 1, name: 'Hoodie', description: 'Very comfy shit', price: '$280', image: 'https://cdn-images.farfetch-contents.com/18/02/57/49/18025749_39820818_1000.jpg'},
    {id: 2, name: 'Hoodie 2', description: 'Very comfy too', price: '$250', image: 'https://misbhv.com/media/catalog/product/cache/db7c8243ad48af652d1681a9999aa755/f/i/fix-021m161_2001-polizei-hoodie-black_1.jpg'},
    {id: 1, name: 'Hoodie', description: 'Very comfy shit', price: '$280', image: 'https://cdn-images.farfetch-contents.com/18/02/57/49/18025749_39820818_1000.jpg'},
    {id: 2, name: 'Hoodie 2', description: 'Very comfy too', price: '$250', image: 'https://misbhv.com/media/catalog/product/cache/db7c8243ad48af652d1681a9999aa755/f/i/fix-021m161_2001-polizei-hoodie-black_1.jpg'},
    {id: 1, name: 'Hoodie', description: 'Very comfy shit', price: '$280', image: 'https://cdn-images.farfetch-contents.com/18/02/57/49/18025749_39820818_1000.jpg'},
    {id: 2, name: 'Hoodie 2', description: 'Very comfy too', price: '$250', image: 'https://misbhv.com/media/catalog/product/cache/db7c8243ad48af652d1681a9999aa755/f/i/fix-021m161_2001-polizei-hoodie-black_1.jpg'},
    
    
];

const Products = () => {
 return (
    <div className="grid" style={{
        width: "75%",
        marginLeft: "20px"
    }}>
        <Grid container spacing={3}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </div>
    );
}

export default Products