import React from "react";

const BestSeller = ({ filter }) => {
  return (
    <div>
      <div className="titlehead">
        <div className="divborder"></div>
        <h1 className="cattitle">Best Seller</h1>
        <div className="divborder"></div>
      </div>
      <ul className="products">
        {filter.map((product) => {
          return (
            <>
              <li class="product">
                <div class="" key={product.id}>
                  <div className="productimage">
                    <img
                      src={product.image}
                      class=""
                      alt={product.title}
                      height="200px"
                    />
                  </div>
                  <div class="">
                    <h5 class="producttitle">
                      {product.title ? product.title.substring(0, 10) : ""}...
                    </h5>
                    <p class="productprice">${product.price}</p>
                    {/* <Link to={{ pathname: "/product/" + product.id, items: { item } }} class="btn btn-outline-dark">Buy Now</Link> */}
                  </div>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default BestSeller;
