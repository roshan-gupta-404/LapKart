import React from 'react'
import { featured } from './featured'

function Featured() {
    return (
        <>
            <div id='featured' className='my-4'>
                <h2 className='text-2xl'>Featured Section</h2>
                {featured.map((featured) => (
                    <div id={featured.id} key={featured.id} className='mt-4 border'>
                        <div className='flex justify-between bg-slate-500 px-4 text-white text-xl'>
                            <h2>{featured.title}</h2>
                            <button> See All{">"} </button>
                        </div>
                        {/* CHILDREN */}
                        <div className='featured_cards my-1 flex justify-between overflow-x-auto'>
                            {featured.child.map((child) => (
                                <div key={child.productId} className='w-60 featured_card border p-2'>
                                    <div className='w-56 h-56 flex justify-center'>
                                        <img src={child.img} />
                                    </div>
                                    <div className=''>
                                        <div className='h-36 inline-block my-2'>
                                            {child.desc}
                                        </div>
                                        <div className='bg-yellow-200 text-center rounded-md' >{child.price}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Featured