import React from "react";
import CardShop from "../../components/product";
function index(props) {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 padding-right">
            <div class="features_items">
              <h2 class="title text-center">Features Items</h2>
              <div class="single-shop-product">
                <div className="row">
                  {/* card one */}
                  {props.data.map((data) => (
                    <CardShop data={data} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
