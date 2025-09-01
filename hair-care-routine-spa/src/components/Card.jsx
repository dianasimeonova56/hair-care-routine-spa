import React, { useState } from 'react'

import '../assets/card.css'

function Card({ product, onWishList }) {
  const mainIcon = '/images/heart.png';
  const filledIcon = '/images/heart-filled.png';

  const [activeIcon, setActiveIcon] = useState(mainIcon);
  
  return (
    <div className="card">
      <div className='card-img'>
        <div className='fav'>
          {product.isWishList
            ? <img
              src={filledIcon} 
              onClick={() => onWishList(product.id)}/>
            : <img
              src={activeIcon}
              onMouseOver={() => setActiveIcon(filledIcon)}
              onMouseLeave={() => setActiveIcon(mainIcon)}
              onClick={() => onWishList(product.id)}
            />}

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