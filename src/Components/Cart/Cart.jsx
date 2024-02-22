import React from 'react'
import Container from '../Container'
import QuantityButton from '../QuantityButton/QuantityButton'

function Cart() {
    return (
        <>
            <Container>
                <div className='my-8 flex flex-col items-center'>
                    <div className='flex flex-col sm:flex-row w-fit border border-b-black border-b-2 bg-slate-200 justify-center items-center px-4'>
                        <div id='image' className='min-w-40 w-40 m-2'>
                            <div className=' '><img className='border border-black' src='https://m.media-amazon.com/images/I/51f2hkWjTlL._SX679_.jpg' /></div>
                        </div>
                        <div id='product_details' className='pt-8'>
                            <h3 className='text-lg border-b-2 pb-2'>
                                AMD Ryzen™ 5 5600G Desktop Processor (6-core/12-thread, 19MB Cache, up to 4.4 GHz max Boost) with Radeon™ Graphics
                            </h3>
                            <div className='flex items-center'>
                                <div className='text-sm font-semibold my-4 pl-2'>
                                    ₹12,299 /-
                                </div>
                                <div className='flex items-center'>
                                    <QuantityButton />
                                    <button className=' bg-yellow-400 rounded-md h-fit p-2'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row w-fit border border-b-black border-b-2 bg-slate-200 justify-center items-center px-4 '>
                        <div id='image' className='min-w-40 w-40 m-2'>
                            <div className=' '><img className='border border-black' src='https://m.media-amazon.com/images/I/51f2hkWjTlL._SX679_.jpg' /></div>
                        </div>
                        <div id='product_details' className='pt-8'>
                            <h3 className='text-lg border-b-2 pb-2'>
                                AMD Ryzen™ 5 5600G Desktop Processor (6-core/12-thread, 19MB Cache, up to 4.4 GHz max Boost) with Radeon™ Graphics
                            </h3>
                            <div className='flex items-center'>
                                <div className='text-sm font-semibold my-4 pl-2'>
                                    ₹12,299 /-
                                </div>
                                <div className='flex items-center'>
                                    <QuantityButton />
                                    <button className=' bg-yellow-400 rounded-md h-fit p-2'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className='w-2/12 text-center my-4'>
                    <h3>Total: ₹24,598 /- </h3>
                    <button className='w-full bg-yellow-400 rounded-md p-2 mt-2'>Ckeckout</button>
                </div>
                </div>
            </Container>
        </>
    )
}

export default Cart