import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FetchResults, FilterResults, AttachWishList } from '../services/ProductsService.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Navigation } from 'swiper/modules';

import Card from '../components/Card.jsx';
import '../assets/result.css'
import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/swiper-custom.css'

function Result({ answers, onDeleteSavedAnswers }) {
  const [products, setProducts] = useState([])
  console.log(products.length);


  //initial load products
  useEffect(() => {
    const loadProducts = async () => {

      let toSet = [];
      let saved = JSON.parse(localStorage.getItem("products"));

      if (saved && saved.length > 0) {
        let wishlistArr = saved.filter(s => s.isWishList);
        let nonWishListArr = saved.filter(s => s.isWishList === false);
        let newArr = [...wishlistArr, ...nonWishListArr];

        toSet = newArr;
      } else if (!saved || saved.length == 0) {
        const allProducts = await FetchResults();
        const filtered = FilterResults(allProducts, answers);
        const wishlitProducts = AttachWishList(filtered)
        toSet = wishlitProducts;
      }
      setProducts(toSet);
    };

    loadProducts()
  }, [answers])

  //set products in local storage - TO PERSIST
  useEffect(() => {
    if (products && products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  //on click of card, add/remove product from wishlist
  const handleWishList = (productId) => {
    setProducts(prev => {
      const updated = prev.map(p =>
        p.id === productId ? { ...p, isWishList: !p.isWishList } : p //search array for the id and update the wishlist
      )
      return updated;
    });
  };

  return (
    <div className="results">
      <div className='top'>
        <div className="result-img">
          <img src="/images/result.jpg" />
        </div>
        <div className="info">
          <h1>Build your everyday self care routine.</h1>
          <p>Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients
            that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and
            cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.
          </p>
          <Link to="/">
            <button className='btn-retake' onClick={() => onDeleteSavedAnswers()}>
              Retake the quiz
            </button>
          </Link>
        </div>
      </div>
      <div className='bottom'>
        <div className='cards'>
          <div className="recommendations">
            <div className='main-card'>
              <div className='description'>
                <h1>Daily routine</h1>
                <p>Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients
                  that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and
                  cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.
                </p>
              </div>
            </div>
            {products && products.length > 0
              ? <div className='swiper-container'>
                <Swiper
                  spaceBetween={20}
                  slidesPerView={2}
                  mousewheel={true}
                  pagination={{ clickable: true, dynamicBullets: true, }}
                  // navigation={true}
                  navigation={{
                    nextEl: '.swiper-button-next'
                  }}
                  modules={[Mousewheel, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {products.map((p) => (
                    <SwiperSlide key={p.id}>
                      <Card product={p} onWishList={handleWishList} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-button-next"></div>
              </div>
              : <p>Loading</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result