"use client";
import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import { userProductShow } from "@/Backend/user/productShow.js";

const ProductCard = ({ productTitle, productPrice, productPoster }) => {
  return (
    <div className="product-card">
      <div className="product-card-wrapper">
        <img
          className="product-poster"
          src={productPoster}
          alt="product image"
        />
        <div className="product-details">
          <h3 className="product-title">{productTitle}</h3>
          <div className="productCard-more">
            <p className="product-price">
              <span>$</span>
              <span>{productPrice}</span>
            </p>
            <button className="cart-btn">add to cart</button>
            <button className="live-view-btn">live preview</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductPage = () => {

  const [product, setProduct] = useState([])


  useEffect(() => {
    async function getAllProduct() {
      try {
        const response = await userProductShow();
        setProduct(response);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    getAllProduct();
  }, []);

  return (
    <div id="productPageBody">
      <Navbar />
      <div className="slider-area">
        <div className="slider">
          <div className="slider-wrapper">
            <div className="slider-item">
              <img
                src="/assets/images/Screenshot 2024-04-16 034557.png"
                alt=""
              />
            </div>
            <div className="slider-item">
              <img
                src="/assets/images/Screenshot 2024-04-16 034539.png"
                alt=""
              />
            </div>
            <div className="slider-item">
              <img
                src="/assets/images/Screenshot 2024-04-16 034539.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hero-categories">
          <div className="hc-item">
            <button>
              <span>static websites</span>
            </button>
          </div>
          <div className="hc-item">
            <button>
              <span>single page applications</span>
            </button>
          </div>
        </div>
      </div>

      <SearchBar />

      <div className="product-wrapper">
        <div className="product-area">
          <div className="product-list">
            {product.map((itm,idx)=>{
              return (
                <ProductCard
                key={idx}
                productTitle={itm.title}
                productPrice={itm.price}
                productPoster={itm.thumbnail}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
