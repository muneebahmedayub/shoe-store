import React from 'react'

import { Grid, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';

const ProductIndex = ({shoes}) => {
    return (
        <div>
            <Grid container spacing={3}>
                {Object.entries(shoes).map(([id, { name, img }]) => (
                    <Grid item key={id} xs={12} md={4}>
                        <Link to={`/products/${id}`}>
                            <img src={img} alt={name} width='100%' />
                            <Typography variant='body1' >{name}</Typography>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default ProductIndex
