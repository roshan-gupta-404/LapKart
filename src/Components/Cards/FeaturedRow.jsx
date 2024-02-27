import React from 'react'
import ProductCard from './ProductCard'

function FeaturedRow({ children }) {
    return (
        <div className='mt-4 border'>
            <div className='featured_cards my-1 flex justify-between overflow-x-auto'>
                {/* CHILDREN */}
                {children.map((child) => (
                    <ProductCard key={child.id} child={child} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedRow