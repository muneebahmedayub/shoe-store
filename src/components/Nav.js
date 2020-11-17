import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

//MATERIAL UI COMPONENTS
import { AppBar, Grid, makeStyles, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    }
})

const Nav = () => {
    const classes = useStyles
    const history = useHistory()
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleHistory = (url) => {
        history.push(url)
    }

    return (
        <div>
            <AppBar color='primary' position='static'>

                <Grid container alignItems='flex-end' justify={"space-between"}>
                    <Grid item>
                        <Toolbar>
                            <Typography variant='h4'>Shoe Store</Typography>
                        </Toolbar>
                    </Grid>
                    <Grid item >
                        <Tabs value={value} onChange={handleChange} variant='scrollable' scrollButtons='auto'>
                            <Tab onClick={() => handleHistory('/')} label='Home' />
                            <Tab onClick={() => handleHistory('/products')} label='Products' />
                            <Tab onClick={() => handleHistory('/contact')} label='Contact Us' />
                            <Tab onClick={() => handleHistory('/about')} label='About Us' />
                            <Tab onClick={() => handleHistory('/shoppingCart')} label={<ShoppingCartIcon />}/>
                        </Tabs>
                    </Grid>
                </Grid>

            </AppBar>
        </div>
    )
}

export default Nav
