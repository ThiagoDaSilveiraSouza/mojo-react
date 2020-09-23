import React from 'react'
import './what-we-do.css'

// components
import { Carousel } from './components/carousel'

export const WhatWeDo = () => {
  return (
    <section id="what-we-do" data-id="3">
      <div className="centralizer">
        <h2 className="category-title">O que fazemos</h2>
        <h4>Nós assumimos seus desafios e planejamos ações estratégicas</h4>
        <Carousel></Carousel>
      </div>
    </section>
  )
}
