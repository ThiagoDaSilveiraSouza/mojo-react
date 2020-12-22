import React from 'react'
import { Link } from 'react-router-dom'
import { StyledCarouselCard } from './styled-carousel-card'

export const CarouselCard = ({ categoryCard }) => {
  const { name, description, color, imgPath, link } = categoryCard
  return (
    <StyledCarouselCard color={color}>
      <Link to={link}>
        <div>
          <img src={`./assets/services-icons/${imgPath}`} alt={name} />
          <div></div>
          <span>Saiba Mais</span>
        </div>
        <div>
          <h5>{name}</h5>
          <p>{description}</p>
        </div>
      </Link>
    </StyledCarouselCard>
  )
}
