import React from 'react'

function QuantityButton() {
    return (
        <div id='quantity' className='px-8 my-8'>
            <button className='border w-10 text-xl text-white bg-orange-400'>-</button>
            {" 1 "}
            <button className='border w-10 text-xl text-white bg-green-500'>+</button>
        </div>
    )
}

export default QuantityButton