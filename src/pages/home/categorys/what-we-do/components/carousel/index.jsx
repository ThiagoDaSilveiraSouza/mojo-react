import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './carousel.css'

// data
import { categoryList } from './data'

export const Carousel = () => {
  const categoryElement = (element) => {
    return (
      <Link to={element.link} className="category-element" key={element.id}>
        <div
          className="category-element-img"
          style={{ background: element.color }}
        >
          <img
            src={`./assets/services-icons/${element.imgPath}`}
            alt={element.name}
          />
          <div className="category-element-button">
            <button>Saiba Mais</button>
          </div>
        </div>
        <div className="category-element-description">
          <h3>{element.name}</h3>
          <p>{element.description}</p>
        </div>
      </Link>
    )
  }

  const carouselStatus = {
    element: () => document.querySelector('.carousel-content'),
    lastCardPosition: () =>
      document.querySelectorAll('.category-element').length - 1,
    widthOfCardElement: () =>
      document.querySelector('.category-element').innerWidth,
    atualPosition: 0,
    setInitialPosition: (position) => carouselStatus.element(),
  }
  carouselStatus.setInitialPosition()
  const [carouselPosition, setCarouselPosition] = useState(0)

  const moveCarousel = {
    toLeft: () => {
      if (carouselPosition > 0) {
        setCarouselPosition(carouselPosition - 1)
      } else {
        setCarouselPosition(carouselStatus.lastCardPosition())
      }
    },
    toRight: () => {
      if (carouselPosition < carouselStatus.lastCardPosition()) {
        setCarouselPosition(carouselPosition + 1)
      } else {
        setCarouselPosition(0)
      }
    },
  }
  return (
    <div className="carousel">
      <div
        className="carousel-arrows carousel-left-arrow "
        onClick={() => moveCarousel.toLeft()}
      >
        <p>{'<'}</p>
      </div>

      <div className="carousel-content">
        {categoryList.map((element) => categoryElement(element))}
      </div>

      <div
        className="carousel-arrows carousel-right-arrow "
        onClick={() => moveCarousel.toRight()}
      >
        <p>{'>'}</p>
      </div>
    </div>
  )
}
