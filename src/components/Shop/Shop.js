import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import {
  addToDb,
  removeFromDb,
  deleteShoppingCart,
  getStoredCart,
} from "../../utilities/fakedb";
import "./Shop.css";
import useProducts from "../../hooks/useProducts";

const Shop = () => {
  // Using custom hook for Getting loaded PRODUCT
  const [products, setProducts] = useProducts();

  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   fetch("products.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //     });
  // }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    // console.log(storedCart);
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      // console.log(addedProduct);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        console.log(addedProduct);
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  // console.log(cartItems);

  const addToChart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    console.log(exists);
    if (exists) {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    } else {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }
    // const newCart = [...cart, selectedProduct];
    setCart(newCart);
    // console.log(cart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shopContainer">
      {/* {console.log(products[0])} */}
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
