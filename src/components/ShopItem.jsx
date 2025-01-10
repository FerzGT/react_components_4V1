import React from 'react';
import PropTypes from 'prop-types';

export default function ShopItem({ item }) {
  const background = { backgroundImage: 'url(' + item.img + ')' };
  return (
    <div className="ShopItem">
      <div className="ShopItem-img" style={background}></div>
      <div className="ShopItem-name">{item.name}</div>
      <div className="ShopItem-color">{item.color}</div>
      <div className="ShopItem-price">${item.price}</div>
      <div className="ShopItem-button">Add to cart</div>
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.object.isRequired,
}