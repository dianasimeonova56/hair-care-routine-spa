import React, { useState } from 'react'

import '../assets/card.css'

function Card({ product }) {
  const mainIcon = '/images/heart.png';
  const filledIcon = '/images/heart-filled.png';

  const isWishlist = false;

  const [activeIcon, setActiveIcon] = useState(mainIcon);

  return (
    <div className="card">
      <div className='card-img'>
        <div className='fav'>
          <img
            src={activeIcon}
            onMouseOver={() => setActiveIcon(filledIcon)}
            onMouseLeave={() => setActiveIcon(mainIcon)}
          />
        </div>
        <div className='img'>
          <img src={product.images[0].src} />
        </div>
      </div>
      <div className='info-card'>
        <h2>{product.title}</h2>
        <p>${product.variants[0].price}</p>
      </div>
    </div>
  )
}

export default Card