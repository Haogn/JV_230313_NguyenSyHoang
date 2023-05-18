import React, { useState } from "react";
import ListProduct from "./ListProduct/ListProduct";
import { dataProduct } from "./Data";
import CartProduct from "./CartProduct/CartProduct";

function ParentProduct() {
  const [data, setData] = useState(dataProduct);

  const [listBuy, setListBuy] = useState([]);

  function handleBuy(index) {
    const newProduct = [...data];
    const newList = [...listBuy];
    if (!newList.length) {
      setListBuy([...listBuy, newProduct[index]]);
    } else {
      let check = -1;
      for (let i = 0; i < newList.length; i++) {
        if (newProduct[index].name === newList[i].name) {
          check = i;
        }
      }
      if (check === -1) {
        setListBuy([...listBuy, newProduct[index]]);
      } else {
        setListBuy(newList);
      }
    }
    newProduct[index].count = newProduct[index].count + 1;
    setData(newProduct);
    console.log("newList", newList);
  }
  console.log(dataProduct);

  return (
    <div>
      <ListProduct dataProduct={dataProduct} handleBuy={handleBuy} />
      <CartProduct />
    </div>
  );
}

export default ParentProduct;
