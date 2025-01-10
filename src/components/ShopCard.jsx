import React from 'react';
import PropTypes from 'prop-types';

export default function ShopCard({ card }) {
  const background = { backgroundImage: 'url(' + card.img + ')' };
  return (
    <div className="ShopCard" style={background}>
      <div className="ShopCard-name">{card.name}</div>
      <div className="ShopCard-color">{card.color}</div>
      <div className="ShopCard-container">
        <div className="ShopCard-price">${card.price}</div>
        <div className="ShopCard-button">Add to cart</div>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  card: PropTypes.object.isRequired,
}