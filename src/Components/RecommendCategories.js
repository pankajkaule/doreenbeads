import React from 'react'
import '../styles/weekenddeals.css'

const RecommendCategories = ({filter}) => {
    return (
       <div>
            <div className="titlehead1">
                {/* <div className='divborder'></div> */}
                <div className="circle"></div>
                <h1 className='cattitle1'>Recommend Categories</h1>
                <div className="circle"></div>

                {/* <div className='divborder'></div> */}
            </div>
            <ul className='products'>
                {
                    filter.map((product) => {

                        return (
                            <>

                                <li class="product">

                                    <div class="" key={product.id}>
                                        <div className="productimage">
                                            <img src={product.image} class="" alt={product.title} height="200px" />
                                        </div>
                                        <div class="">
                                            <h5 class="producttitle">{product.title?product.title.substring(0,10):""}...</h5>
                                            <p class="productprice">${product.price}</p>
                                            {/* <Link to={{ pathname: "/product/" + product.id, items: { item } }} class="btn btn-outline-dark">Buy Now</Link> */}
                                        </div>
                                    </div>
                                </li>
                            </>
                        )
                    })
                }

            </ul>

        </div>
    )
}

export default RecommendCategories