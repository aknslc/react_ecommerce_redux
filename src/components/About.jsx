import React from 'react'

export default function About() {
  return (
    <>
      <div className="container my-8">
        <h1 className='text-center text-5xl text-[#61BBC4] my-16'>ABOUT</h1>
        <div className="about flex justify-between items-start p-8">
          <div className="about-text w-1/2 mr-7">
            <h1 className='text-center text-4xl uppercase my-4 font-serif text-gray-600'>We Are</h1>
            <p className='text-center text-gray-500'>Lorem ipsum dolor sit am architecto osentium! Tenetur error hic, eveniet neque voluptatibus dolorum consequuntur odio tempora ipsa natus accusamus veniam accusantium aperiam nesciunt dolores in quibusdam molestias nostrum reprehenderit excepturi, nulla est ducimus recusandae qui! Laudantium, quis. Suscipit, sunt vero consectetur sit consequuntur placeat ad eius minus eaque sint qui expedita nemo optio minima asperiores culpa eligendi? Voluptate officiis nobis, nam, exercitationem veritatis magnam dolorem eius tenetur illum laborum perferendis ut totam animi quidem saepe laudantium laboriosam consequuntur impedit pariatur aliquid cupiditate perspiciatis velit. Eius cupiditate ipsam non.</p>

          </div>
          <div className="about-image w-1/2">
            <img className='w-full rounded opacity-90' src="https://bloghubstaffcom.lightningbasecdn.com/wp-content/uploads/2021/04/productivity-tools-for-ecommerce-team@2x.png" alt="about" />

          </div>
        </div>
      </div>
    </>
  )
}
