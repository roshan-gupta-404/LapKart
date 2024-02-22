import React, { useRef } from 'react'
import Container from '../Container'

function ProductList() {
    const products = [
        {
            img: 'https://m.media-amazon.com/images/I/81uZ0m4puHL._AC_UY218_.jpg',
            desc: 'Kuro RTX Gaming PC RGB - Intel 12th Gen i7 12700F- 12C/20T, 32GB DDR4 RAM, 500GB SSD, RTX 3060 12GB Graphics',
            productId: 'p1',
            price: '₹1,47,890 '
        },
        {
            img: 'https://m.media-amazon.com/images/I/815EfSiaMJL._AC_UY218_.jpg',
            desc: 'NXTGN Core i9 Gaming PC (Core i9 11th Gen Processor, 32GB RAM, 1TB SSD, 4TB Hard Drive, 12GB RTX3060 Graphic Card, Onboard WiFi, Windows 11 Pro)',
            productId: 'p2',
            price: '₹1,20,490'
        },
        {
            img: 'https://m.media-amazon.com/images/I/51w56pFIRCL._AC_UY218_.jpg',
            desc: 'ASUS ROG Strix G10DK, 6 core AMD Ryzen 5 5600X, G10DK-R5600X146W',
            productId: 'p3',
            price: '₹67,990 '
        },
        {
            img: 'https://m.media-amazon.com/images/I/81YFpilzGvS._AC_UY218_.jpg',
            desc: ' ASUS ROG Strix G10CE, 8 Core Intel Core i7-10700 10th Gen Gaming Desktop (16GB/1TB HDD + 512GB SSD/6GB NVIDIA GeForce GTX 1660 Ti',
            productId: 'p4',
            price: '₹99,999'
        },
        {
            img: 'https://m.media-amazon.com/images/I/81uZ0m4puHL._AC_UY218_.jpg',
            desc: 'Kuro RTX Gaming PC RGB - Intel 12th Gen i7 12700F- 12C/20T, 32GB DDR4 RAM, 500GB SSD, RTX 3060 12GB Graphics',
            productId: 'p1',
            price: '₹1,47,890 '
        },
        {
            img: 'https://m.media-amazon.com/images/I/815EfSiaMJL._AC_UY218_.jpg',
            desc: 'NXTGN Core i9 Gaming PC (Core i9 11th Gen Processor, 32GB RAM, 1TB SSD, 4TB Hard Drive, 12GB RTX3060 Graphic Card, Onboard WiFi, Windows 11 Pro)',
            productId: 'p2',
            price: '₹1,20,490'
        },
        {
            img: 'https://m.media-amazon.com/images/I/51w56pFIRCL._AC_UY218_.jpg',
            desc: 'ASUS ROG Strix G10DK, 6 core AMD Ryzen 5 5600X, G10DK-R5600X146W',
            productId: 'p3',
            price: '₹67,990 '
        },
        {
            img: 'https://m.media-amazon.com/images/I/81YFpilzGvS._AC_UY218_.jpg',
            desc: ' ASUS ROG Strix G10CE, 8 Core Intel Core i7-10700 10th Gen Gaming Desktop (16GB/1TB HDD + 512GB SSD/6GB NVIDIA GeForce GTX 1660 Ti',
            productId: 'p4',
            price: '₹99,999'
        },
    ]
    const filter = useRef(null)
    function toggleFilterBar() {
        filter.current.classList.toggle("-translate-x-full");
      }
    return (
        <>
            <Container>
                <div className='flex'>
                    <div className='bg-white h-full absolute lg:translate-x-0 lg:static min-w-fit border-r-2 p-4 duration-300 '
                    ref={filter}
                    >
                        <div onClick={toggleFilterBar} className='lg:hidden w-fit px-4 text-white bg-blue-500'>{'<<'}</div>
                        <div className='my-4'>
                            <h3>Categories</h3>
                            <div className='flex flex-col pl-4'>
                                <div><input type='radio' name='category' /><label> PC</label></div>
                                <div><input type='radio' name='category' /><label> Laptop</label></div>
                                <div><input type='radio' name='category' /><label> Accessories</label></div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <h3>Filter By Price</h3>
                            <div className='flex flex-col pl-4'>
                                <div><span>0 </span><input type='range' name='category' min={0} max={1000} /><span> 1000</span></div>
                            </div>
                        </div>
                        <div className='my-4'>
                            <h3>Sort By</h3>
                            <div className='flex flex-col pl-4'>
                                <div><input type='radio' name='sort' /><label> Price: Low to High</label></div>
                                <div><input type='radio' name='sort' /><label> Price: High to Low</label></div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-10/12 border-l-2 p-4'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-3xl border-b-2 mb-4 p-2'> Computers </h1> 
                        <button className='lg:hidden bg-blue-300 h-fit p-2 text-xl' onClick={toggleFilterBar}>Filter</button> </div>
                    <div className='featured_cards my-1 flex flex-wrap gap-2'>
                            {products.map((child) => (
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
                </div>
            </Container>
        </>
    )
}

export default ProductList