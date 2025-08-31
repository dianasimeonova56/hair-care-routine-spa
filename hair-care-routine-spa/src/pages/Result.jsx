import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FetchResults, FilterResults } from '../services/ProductsService.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Navigation } from 'swiper/modules';

import Card from '../components/Card.jsx';
import '../assets/result.css'
import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/swiper-custom.css'

function Result({ answers, onDeleteSavedAnswers }) {
  //if no answers -> error or display a message, dont render anything
  const [products, setProducts] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const allProducts = await FetchResults();
      const filtered = FilterResults(allProducts, answers)

      setProducts(filtered)
    };
    loadProducts()
  }, [answers])


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
                      <Card product={p} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-button-next"></div>
              </div>
              : "Loading"
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result