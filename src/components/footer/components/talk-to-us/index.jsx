import React from 'react'
import './talk-to-us.css'

// components
import { SocialMedia } from '../../../social-media'

export const TalkToUs = () => {
  return (
    <section id="talk-to-us">
      <div className="centralizer">
        <h2>Fale com a gente</h2>
        <h4>Envie uma mensagem</h4>

        {/* talk-to-us-content */}
        <div className="talk-to-us-content">
          {/* form */}
          <form action="/action_page.php">
            <input
              type="text"
              placeholder="Nome:"
              required
              className="form-fild"
              data-name
            />
            <input
              type="tel"
              id="phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="Telefone:"
              required
              className="form-fild"
              data-phone
            />
            <input
              type="email"
              placeholder="E-mail:"
              required
              className="form-fild"
              data-email
            />
            <textarea
              placeholder="Mensagem:"
              required
              className="form-fild"
              data-message
            ></textarea>
            <input type="submit" placeholder="Enviar" data-form-button />
          </form>

          {/* contact */}
          <div className="contact">
            <p className="our-phone">
              <img src="./assets/telefone-icon.svg" alt="telefone" />
              (21) xxxxx-xxxx (CEL/WHATSAPP)
            </p>
            <p className="our-email">
              <img src="./assets/e-mail-icon.svg" alt="email" />
              contato@mojoagenciadigital.com.br
            </p>
            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
  )
}
