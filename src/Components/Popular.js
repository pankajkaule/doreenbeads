import React from 'react'
import '../styles/popular.css'
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Popular = ({ filter, category }) => {
    return (
        <>
            <div className="titlehead">
                <div className='divborder'></div>
                <h1 className='cattitle'>Popular Category </h1>
                <div className='divborder'></div>
            </div>
            <ul className='products1'>
                {
                    filter.map((product) => {
                        // console.log(filter,"aaa");
                        return (
                            <>

                                <li class="product1">

                                    <div class="" key={product.id}>
                                        <div className="productimage1">
                                            <Link to={{ pathname: "/product/" + product.category,items:{product}  }}> <img src={product.image} class="" alt={product.title} height="200px" /></Link>
                                        </div>
                                        <div class="">


                                            {/* <h5 class="">{product.title}</h5> */}
                                            {/* <p class="">${product.price}</p> */}
                                            {/* <Link to={{ pathname: "/product/" + product.id, items: { item } }} class="btn btn-outline-dark">Buy Now</Link> */}
                                        </div>
                                    </div>
                                </li>
                            </>
                        )
                    })
                }

            </ul>

        </>
    )
}

export default Popular
