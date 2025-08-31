import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FetchResults, FilterResults } from '../services/ProductsService.js';

import Card from '../components/Card.jsx';
import '../assets/result.css'

function Result({ answers }) {
  //if no answers -> error or display a message, dont render anything
  const [products, setProducts] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const allProducts = await FetchResults();
      const filtered = FilterResults(allProducts, answers)
      console.log(filtered);

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
          <Link to="/q/1">
            <button className='btn-retake'>
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
            {/* {products.map(p => (
            <Card product={p} />
          ))} */}
            {products && products.length > 0
              ? <Card product={products[0]} />
              : "No products to display"
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Result