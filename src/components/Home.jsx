import React from 'react';
import About from './About';
import Hero from './Hero';
import Promo from './Promo';

export default function Home() {
    return (
        <>
            <div className='bg-[#FBFBFB]'>
                <Hero />
                <Promo />
                <About/>

            </div>
        </>
    )
}
