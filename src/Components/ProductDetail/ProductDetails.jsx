import React from 'react'
import Container from '../Container'
import QuantityButton from '../QuantityButton/QuantityButton'

function ProductDetails() {
    return (
        <>
            <Container>
                <div className='md:flex my-8 mx-2 '>
                    <div id='image' className='md:w-1/2 lg:w-2/3 flex flex-col lg:flex-row md:mr-2'>
                        <div className=' lg:order-last lg:w-10/12'><img className='border border-black' src='https://m.media-amazon.com/images/I/51f2hkWjTlL._SX679_.jpg' /></div>
                        <div className='flex lg:flex-col overflow-x-auto lg:w-2/12 m-1'>
                            <div className='w-32 border border-black m-1 lg:w-fit'><img src='https://m.media-amazon.com/images/I/51f2hkWjTlL._SX679_.jpg' /></div>
                            <div className='w-32 border border-black m-1 lg:w-fit'><img src='https://m.media-amazon.com/images/I/51f2hkWjTlL._SX679_.jpg' /></div>
                        </div>
                    </div>
                    <div id='product_details' className='md:w-1/2 lg:w-1/3 pt-8'>
                        <h1 className='text-3xl border-b-2 pb-2'>
                        AMD Ryzen™ 5 5600G Desktop Processor (6-core/12-thread, 19MB Cache, up to 4.4 GHz max Boost) with Radeon™ Graphics
                        </h1>
                        <div className='text-2xl font-semibold my-4 px-8'>
                        ₹12,299 /-
                        </div>

                        <QuantityButton/>

                        <div className='my-4 px-8 flex justify-between gap-x-2'>
                            <button className='w-52 bg-yellow-400 p-2 text-xl rounded-md'>Add To Cart</button>
                            <button className='w-52 bg-yellow-400 p-2 text-xl rounded-md'>Buy Now</button>
                        </div>
                        <div className='flex flex-wrap px-8'>
                            <span className='border bg-teal-400 p-2 rounded-md mr-2 mb-2'>Seller: LapKart </span>
                            <span className='border bg-teal-400 p-2 rounded-md mr-2 mb-2'>Category: Product Category</span>
                            <span className='border bg-teal-400 p-2 rounded-md mr-2 mb-2'>Warrany: 10 yrs </span>
                            <span className='border bg-teal-400 p-2 rounded-md mr-2 mb-2'>Delivery in: 1 day </span>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default ProductDetails