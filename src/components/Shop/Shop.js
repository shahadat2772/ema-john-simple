import React, { useEffect, useState } from "react";
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
        <h4>Order summery</h4>
        <p>Selected item: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
