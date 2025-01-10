import React from 'react';
import ShopCard from './ShopCard';
import PropTypes from 'prop-types';

export default function CardsView({ cards }) {
  return (
    <div className="CardsView">
      {cards.map((card) => {
        return (
          <ShopCard card={card} key={card.name + card.color} />
        );
      })}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.array.isRequired,
}