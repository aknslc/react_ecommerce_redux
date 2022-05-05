import React from 'react'
import CachedIcon from '@mui/icons-material/Cached';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import RedeemIcon from '@mui/icons-material/Redeem';

const theme = createTheme({
    palette: {
      primary: {
        
        main: '#fff',
      },
    },
  });

export default function Promo() {
    return (
        <>
            <div className="items container grid grid-cols-4 gap-x-8 my-10">
                <div className="promo-item bg-[#5a88ca] text-center p-3 hover:bg-black transition-all duration-200">
                    <ThemeProvider theme={theme}>
                        <CachedIcon color='primary' fontSize='large'/>
                    </ThemeProvider>
                    <p className='text-white text-2xl mt-2'>30 Days Return</p>
                </div>
                <div className="promo-item bg-[#ffd900] text-center p-3 hover:bg-black transition-all duration-200">
                    <ThemeProvider theme={theme}>
                        <LocalShippingIcon color='primary' fontSize='large'/>
                    </ThemeProvider>
                    <p className='text-white text-2xl mt-2'>Free shipping</p>
                </div>
                <div className="promo-item bg-[#FA8072] text-center p-3 hover:bg-black  transition-all duration-200">
                    <ThemeProvider theme={theme}>
                        <LockOutlinedIcon color='primary' fontSize='large'/>
                    </ThemeProvider>
                    <p className='text-white text-2xl mt-2'>Secure payments</p>
                </div>
                <div className="promo-item bg-[#4abebd] text-center p-3 hover:bg-black transition-all duration-200">
                    <ThemeProvider theme={theme}>
                        <RedeemIcon color='primary' fontSize='large'/>
                    </ThemeProvider>
                    <p className='text-white text-2xl mt-2'>New products</p>
                </div>
            </div>
        </>
    )
}
