import React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Navbar() {


    const amount = useSelector((state)=> state.handleCart.cart.length);
   
    



    return (
        <>
            <div className='bg-gray-100 sticky top-0 z-50'>
                <div className='container'>
                    <div className='flex items-center justify-between p-3'>
                        <a href='/' className='text-4xl font-light'>Shop</a>

                        <nav className=''>
                            <Link className="mx-6 hover:border-b-2 cursor-pointer text-lg transition-all duration-150" to="/">Home</Link>
                            <Link className="mx-6 hover:border-b-2 cursor-pointer text-lg transition-all duration-150" to="/products">Products</Link>
                            <Link className="mx-6 hover:border-b-2 cursor-pointer text-lg transition-all duration-150" to="/about">About</Link>
                            <Link className="mx-6 hover:border-b-2 cursor-pointer text-lg transition-all duration-150" to="/contact">Contact</Link>
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
