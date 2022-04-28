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
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Shop = () => {
  // Using custom hook for Getting loaded PRODUCT
  const [products, setProducts] = useProducts();
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useCart();
  const [pageCount, setPageCount] = useState(0);
  const [page, setCurrentPage] = useState(0);
  const [size, setSize] = useState(10);

  // Getting products quantity and calculating the pages quantity
  useEffect(() => {
    fetch("https://blooming-lowlands-98485.herokuapp.com/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data?.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://blooming-lowlands-98485.herokuapp.com/product?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);

  console.log(page);

  // useEffect(() => {
  //   const storedCart = getStoredCart();

  //   const savedCart = [];
  //   for (const id in storedCart) {
  //     // let addedProduct;
  //     // if (id) {
  //     //   fetch(`https://blooming-lowlands-98485.herokuapp.com/product/${id}`)
  //     //     .then((res) => res.json())
  //     //     .then((data) => (addedProduct = data));
  //     // }

  //     const addedProduct = products.find((product) => product._id === id);

  //     if (addedProduct) {
  //       const quantity = storedCart[id];
  //       addedProduct.quantity = quantity;
  //       console.log(addedProduct);
  //       savedCart.push(addedProduct);
  //     }
  //   }
  //   setCart(savedCart);
  // }, [products]);

  // console.log(cartItems);

  const addToChart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    console.log(exists);
    if (exists) {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    } else {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }
    // const newCart = [...cart, selectedProduct];
    setCart(newCart);
    // console.log(cart);
    addToDb(selectedProduct._id);
  };

  return (
    <div className="shopContainer">
      {/* {console.log(products[0])} */}
      <div>
        <div className="productsContainer">
          {products.map((product) => (
            <Product
              addToChart={addToChart}
              product={product}
              key={product._id}
            ></Product>
          ))}
        </div>
        <div className="pagination">
          {/* Dynamic button builder */}
          {[...Array(pageCount).keys()].map((number) => (
            <button
              key={number}
              className={page === number ? "selected" : ""}
              onClick={() => {
                setCurrentPage(number);
              }}
            >
              {number + 1}
            </button>
          ))}
          <select onChange={(e) => setSize(e.target.value)}>
            <option value="5">5</option>
            <option value="10" selected>
              10
            </option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>

      <div className="cartContainer">
        <Cart cart={cart}>
          <Link className="reviewButton" to="/orders">
            <p>Review Order</p>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
