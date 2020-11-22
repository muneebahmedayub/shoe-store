import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//MATERIAL UI COMPONENTS
import { AppBar, Grid, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';


const Nav = () => {
    const navigate = useNavigate()
    const pathname = window.location.pathname
    const [value, setValue] = useState(0)

    useEffect(() => {
        switch (pathname) {
            case '/products':
                setValue(1)
                break;

            case '/contact':
                setValue(2)
                break;

            case '/about':
                setValue(3)
                break;

            default:
                break;
        }
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleHistory = (url) => {
        navigate(url)
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
                        </Tabs>
                    </Grid>
                </Grid>

            </AppBar>
        </div>
    )
}

export default Nav
