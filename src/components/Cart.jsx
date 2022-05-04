import React from 'react';
import { useSelector } from 'react-redux';


export default function Cart() {

  const cart = useSelector((state) => state.handleCart.cart);
  const total = useSelector((state) => state.handleCart.total);

  return (
    <>
      {cart.map((cartItem) => {

        return (
          <div className='items container ' key={cartItem.id}>

            <div className='flex justify-around p-4 items-center'>
              <div>
                <img className='h-[100px] w-[100px]' src={cartItem.image} alt='asd' />
              </div>
              <h1 className='text-center'>{cartItem.title.substring(0, 11)}</h1>
              <p className='text-left'>${cartItem.price}</p>

            </div>
            <hr />


          </div>
        )
      })}
      <div>{total}</div>
    </>
  )
}
