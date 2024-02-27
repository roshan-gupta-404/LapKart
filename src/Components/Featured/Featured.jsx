import React, { useEffect, useState } from 'react'
import axios from 'axios'
import config from '../../config'
import useFetch from '../../Hooks/useFetch'
import FeaturedRow from '../Cards/FeaturedRow'

function Featured() {
    // const [featured, setFeatured] = useState([])
    // fetching products
    const featuredPC = useFetch('/products?populate=*&filters[categories][title][$eqi]=PC&filters[type][$eqi]=featured')
    const featuredLap = useFetch('/products?populate=*&filters[categories][title][$eqi]=Laptop&filters[type][$eqi]=featured')
    const featuredAcc = useFetch('/products?populate=*&filters[categories][title][$eqi]=Accessories&filters[type][$eqi]=featured')
    console.log(featuredPC);

    return (
        <>
        <div id='featured' className='my-4'>
            <h2 className='text-2xl'>Featured Section</h2>
            {featuredPC.loading ? null :
                (featuredPC.error ? 'some Erorr occured' :
                    (<FeaturedRow children={featuredPC.data} />)
                )
            }
            {featuredLap.loading ? null :
                (featuredLap.error ? 'some Erorr occured' :
                    (<FeaturedRow children={featuredLap.data} />)
                )
            }
            {featuredAcc.loading ? null :
                (featuredAcc.error ? 'some Erorr occured' :
                    (<FeaturedRow children={featuredAcc.data} />)
                )
            }
        </div>
            
        </>
    )
}

export default Featured


// {featured.length === 0 ? null : <div id='featured' className='my-4'>
// <h2 className='text-2xl'>Featured Section</h2>
// {featured.map((featured) => (
//     <div id={featured.id} key={featured.id} className='mt-4 border'>
//         <div className='flex justify-between bg-slate-500 px-4 text-white text-xl'>
//             <h2>{featured.title}</h2>
//             <button> See All{">"} </button>
//         </div>
//         {/* CHILDREN */}
//         <div className='featured_cards my-1 flex justify-between overflow-x-auto'>
//             {featured.child.map((child) => (
//                 <div key={child.productId} className='w-60 featured_card border p-2'>
//                     <div className='w-56 h-56 flex justify-center'>
//                         <img src={child.img} />
//                     </div>
//                     <div className=''>
//                         <div className='h-36 inline-block my-2'>
//                             {child.desc}
//                         </div>
//                         <div className='bg-yellow-200 text-center rounded-md' >{child.price}</div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
// ))}
// </div>}