import React from 'react'

import Card from './Card'
import cards from '../data/cards'

const Cards = () => (
  <div className="cards">
    { cards.map(card => <Card key={card.id} {...card} />) }
  </div>
)

export default Cards
