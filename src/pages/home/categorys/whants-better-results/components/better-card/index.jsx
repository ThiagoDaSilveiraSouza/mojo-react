import React from 'react'
import './better-card.css'

export const BetterCard = ({ cardElements }) => {
  return (
    <div className="better-card">
      <img src={cardElements.imgPath} alt={cardElements.title} />
      <h5>{cardElements.title}</h5>
      <p>{cardElements.description}</p>
    </div>
  )
}
