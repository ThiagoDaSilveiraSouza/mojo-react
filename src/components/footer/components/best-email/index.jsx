import React from 'react'
import './best-email.css'

export const BestEmail = () => {
  return (
    <section id="best-email" data-id="4">
      <div className="centralizer">
        <h3>Cadastre o seu melhor e-mail</h3>
        <h5> e receba dicas de como melhorar seu negócio</h5>
        <form className="enter-best-email">
          <input
            type="email"
            autoComplete="on"
            placeholder="Informe seu email"
          />
          <button>
            ok <span></span>
          </button>
        </form>
      </div>
    </section>
  )
}
