import React from "react";
import "./ListProduct.css";

function ListProduct({ dataProduct, handleBuy }) {
  return (
    <div>
      <div className="list-product">
        <div className="item-product">
          {dataProduct.map((e, i) => {
            return (
              <div key={Math.random()} className="item">
                <img src={e.imageUrl} alt="" />
                <div className="body">
                  <h4 className="sub-title">{e.name}</h4> <br />
                  <p className="sub-desc">
                    <p>{e.heading}</p>
                    <br />
                    <p>{e.des}</p>
                  </p>
                  <br />
                  <div className="total">
                    <p>
                      <span>{e.price.toLocaleString()}</span> USD
                    </p>
                    <p>
                      <button onClick={() => handleBuy(i)}>Buy</button>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
