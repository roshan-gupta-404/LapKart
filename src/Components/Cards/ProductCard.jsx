import React from 'react'
import config from '../../config'

function ProductCard({child}) {
    return (
        <div key={child.attributes.title} className='w-60 featured_card border p-2'>
            <div className='w-56 h-56 flex justify-center'>
                <img src={config.imgUrl+child.attributes.img1.data.attributes.url} />
            </div>
            <div className=''>
                <div className='h-10 inline-block my-2'>
                    {child.attributes.title}
                </div>
                <div className='bg-yellow-200 text-center rounded-md' >{child.attributes.price}</div>
            </div>
        </div>
    )
}

export default ProductCard