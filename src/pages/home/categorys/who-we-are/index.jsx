import React from 'react'
import './who-we-are.css'

// components
import { Animation } from './component/animation'

export const WhoWeAre = () => {
  return (
    <section id="who-we-are" data-id="2">
      <div className="centralizer">
        {/* who-description */}
        <div className="who-description">
          <h2 className="category-title">Quem Somos</h2>
          <h3>
            Somos os responsáveis por apontar a direção certa do caminho que a
            sua marca procura
          </h3>
          <p>
            Com uma identidade singular e objetiva, a Mojo é uma agência de
            Marketing e comunicação, composta por profissionais de alto nível
            técnico e experiência profissional no mercado nacional e
            internacional.
          </p>
          <h4>E por que Mojo?</h4>
          <p>
            É o momento quando fazemos algo que é pleno de propósito, poderoso e
            positivo, e o resto do mundo reconhece isto. O Mojo tem um papel
            vital em nossa busca por significado e prazer, uma vez que envolve
            dois pontos simples: amar o que se faz e compartilhar isso com o
            mundo.
          </p>
        </div>
        {/* who-animation */}
        <div className="who-animation">
          <Animation />
        </div>
      </div>
    </section>
  )
}
