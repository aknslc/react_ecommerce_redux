import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../features/handleCart';
import { Link } from 'react-router-dom';


export default function Cart() {

  const cart = useSelector((state) => state.handleCart.cart);
  const total = useSelector((state) => state.handleCart.total);

  const dispatch = useDispatch();

  return (
    <>
      <div className='container items-center gap-y-4'>
        <h2 className='text-center my-20 text-7xl font-thin text-[#72B9CC]'>Shopping Cart</h2>
        {cart.length === 0 ? (
          <div className='cart-empty text-center mt-24 text-2xl'>
            <p className='mb-14 text-3xl text-gray-500'>Your cart is currently empty</p>
            <Link to="/products" className='bg-[#72B9CC] p-4 text-white hover:bg-blue-300 transition-all duration-150 font-medium uppercase'>Start shopping</Link>
          </div>
        ) : (
          <>
            <div className='titles grid grid-cols-3 text-center'>
              <h3 className='product-title uppercase font-semibold'>Product</h3>
              <h3 className='product-price uppercase font-semibold'>Price</h3>
              <h3 className='product-quantity uppercase font-semibold'>Quantity</h3>

            </div>
            <div className='cart-items '>
              {cart.map((product) => {

                return (

                  <div className='cart-item grid grid-cols-3 text-center py-10 border-b-2' key={product.id}>
                    <div className='cart-product flex justify-center items-center'>
                      <img className='h-[100px] w-[100px]' src={product.image} alt={product.name} />
                      <div className='ml-3 grid gap-y-4'>
                        <h3>{product.title.substring(0, 18)}...</h3>
                        <button onClick={()=> dispatch(removeFromCart(product))} className='text-red-500'>Remove</button>
                      </div>
                    </div>
                    <div className=''>${product.price}</div>
                    <div className='product-quantity'>
                      <button className='text-xl'>+</button>
                      <div className='count text-sm my-2'>1</div>
                      <button className='text-xl'>-</button>
                    </div>
                    
                  </div>

                )
              })}
            </div>

          </>
        )}
      </div>
    </>
  )
}
