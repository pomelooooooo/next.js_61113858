import React from "react";

function index(props) {
  const { data } = props;
  return (
    <>
      <div class="col-sm-4">
        <div class="product-image-wrapper">
          <div class="single-products">
            <div class="productinfo text-center">
              <img src={data.product_img} width="200" height="360" />
              <h2>{data.product_price} ฿</h2>
              <p>{data.product_name} </p>
              <a
                href="<%- '/products/detail/'+product._id%>"
                class="btn btn-default add-to-cart"
              >
                <i class="fa fa-search"></i>Go to Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
