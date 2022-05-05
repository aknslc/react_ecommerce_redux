import React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Navbar() {


    const amount = useSelector((state) => state.handleCart.cart.length);

    const theme = createTheme({
        palette: {
            primary: {

                main: '#A0D4E6',
            },
        },
    });

    return (
        <>
            <div className='bg-gray-100 sticky top-0 z-50'>
                <div className='container'>
                    <div className='flex items-center justify-between p-4'>

                        <div className="logo flex items-center">
                            <ThemeProvider theme={theme}>
                                <ShoppingBasketOutlinedIcon fontSize='large' color='primary' />
                            </ThemeProvider>
                            <div className="logo-text">
                                <a href='/' className='text-3xl font-medium text-[#A0D4E6] ml-2'>Online Shopping</a>
                            </div>

                        </div>

                        <nav className=''>
                            <Link className="mx-6 hover:border-b-2 border-[#5A88CA] cursor-pointer text-base transition-all duration-150 uppercase font-normal text-gray-600" to="/">Home</Link>
                            <Link className="mx-6 hover:border-b-2 border-[#5A88CA] cursor-pointer text-base transition-all duration-150 uppercase font-normal text-gray-600" to="/products">Products</Link>
                            <Link className="mx-6 hover:border-b-2 border-[#5A88CA] cursor-pointer text-base transition-all duration-150 uppercase font-normal text-gray-600" to="/about">About</Link>
                            <Link className="mx-6 hover:border-b-2 border-[#5A88CA] cursor-pointer text-base transition-all duration-150 uppercase font-normal text-gray-600" to="/contact">Contact</Link>
                        </nav>

                        <Link to="/cart">
                            <Badge badgeContent={amount} color="error">

                                <IconButton sx={{ p: 0 }} aria-label="cart">
                                    <ShoppingCartIcon />
                                </IconButton>

                            </Badge>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}
