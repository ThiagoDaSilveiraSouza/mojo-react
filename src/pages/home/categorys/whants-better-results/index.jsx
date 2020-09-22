import React from 'react'
import './whants-better-results.css'

// components
import { BetterCard } from './components/better-card'

// data
import { BetterCardList } from './components/better-card/better-card-list'

export const WhantsBetterResults = () => {
  return (
    <section id="whants-better-results">
      <div className="centralizer">
        <h2 className="category-title">
          Quer melhorar os resultados da sua marca?
        </h2>
        <h4>
          Em nossa bússola, existem quatro pontos cardeais que direcionam a sua
          marca a ser um grande Mojo no seu nicho de atuação e que destaca a sua
          marca de todas as outras no mercado. <br />
          Esses pontos são:
        </h4>

        <div className="better-results-cards">
          {BetterCardList.map((cardElement) => (
            <BetterCard cardElements={cardElement} key={cardElement.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
