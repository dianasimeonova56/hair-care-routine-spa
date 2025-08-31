import React from 'react'

import '../assets/card.css'

function Card({product}) {
  return (
    <div className="card">
        <div className='card-img'>
            <img src={product.images[0].src}/>
        </div>
        <div className='info-card'>
            <h2>{product.title}</h2>
            <p>${product.variants[0].price}</p>
        </div>
    </div>
  )
}

export default Card