import React from 'react';
import ShopItem from './ShopItem';
import PropTypes from 'prop-types';

export default function ListView({ items }) {
  return (
    <div className="ListView">
      {items.map((item) => {
        return (
          <ShopItem item={item} key={item.name + item.color} />
        );
      })}
    </div>
  );
}

ListView.propTypes = {
  items: PropTypes.array.isRequired,
}