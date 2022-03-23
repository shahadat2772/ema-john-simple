import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToChart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(cart);
  };

  return (
    <div className="shopContainer">
      {console.log(products[0])}
      <div className="productsContainer">
        {products.map((product) => (
          <Product
            addToChart={addToChart}
            product={product}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="cartContainer">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
