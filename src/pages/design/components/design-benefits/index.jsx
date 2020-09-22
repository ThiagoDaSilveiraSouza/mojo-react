import React from 'react'
import './desig-benefits.css'

export const DesignBenefits = () => {
  const benefitsCards = [
    {
      title: 'Inovação',
      text:
        'Busca soluções originais de função, de uso de materiais e tecnologia, de produtividade e sustentabilidade, agregando novos valores a produtos e serviços.',
    },
    {
      title: 'Identidade',
      text:
        'Criar identidades que comunicam as qualidades e características das empresas e dos seus produtos com o público.',
    },
    {
      title: 'Comunicação',
      text:
        'É responsável pelos meios visuais que fazem a associação da empresa com o público.',
    },
    {
      title: 'Qualidade',
      text:
        'Busca soluções eficientes para os produtos em relação à empresa e ao mercado, aos meios produtivos, ao meio ambiente e à qualidade de vida das pessoas.',
    },
  ]

  const cardElement = (card) => {
    return (
      <div className="benefits-card">
        <h4 className="page-sub-title-2">{card.title}</h4>
        <p className="page-text">{card.text}</p>
      </div>
    )
  }

  return (
    <section className="DesignBenefits">
      {benefitsCards.map(cardElement)}
    </section>
  )
}
