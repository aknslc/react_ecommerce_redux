import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='bg-[#333333] p-[80px] mt-20'>
                <div className="container grid grid-cols-3 gap-x-8">
                    <div className="about grid gap-y-4">
                        <h1 className='text-gray-300 text-center text-3xl '>Shopping</h1>
                        <p className='text-gray-300 text-center'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipi Lorem ipsum dolor sit amet consectetur adipiconsectetur adipisicing elit. Ipsam ea perferendis ut beatae itaque, numquam commodi quasi voluptate iste cum.</p>
                    </div>
                    <div className="categories">
                        <div className="category grid gap-y-4 justify-center">
                            <h1 className='text-gray-300'>Categories</h1>
                            <p className='border-b-[1px] border-dotted text-gray-300 '>Mobile Phone</p>
                            <p className='border-b-[1px] border-dotted text-gray-300 '>LED TV</p>
                            <p className='border-b-[1px] border-dotted text-gray-300 '>Computer</p>
                            <p className='border-b-[1px] border-dotted text-gray-300 '>Gadets</p>
                        </div>
                    </div>
                    <div className="newsletter grid gap-y-4">
                        <h1 className='text-gray-300 text-center text-3xl'>Newsletter</h1>
                        <p className='text-gray-300'>Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!</p>
                        <input className='p-3 outline-none' type="email" placeholder='Type your email' />
                        <button className='bg-[#7AB3D1] text-white p-4'>Subscribe</button>
                    </div>

                </div>
            </div>
        </>
    )
}
