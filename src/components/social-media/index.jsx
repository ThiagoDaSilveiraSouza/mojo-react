import React from 'react'
import './social-media.css'

// components
import {
  InstagramIcon,
  TwitterIcon,
  WhatsAppIcon,
  FacebookIcon,
} from './data/social-media-icons'

export const SocialMedia = ({ atualCategory }) => {
  return (
    <div className="social-media">
      <FacebookIcon atualCategory={atualCategory || 'icon-color-home'} />
      <WhatsAppIcon atualCategory={atualCategory || 'icon-color-home'} />
      <TwitterIcon atualCategory={atualCategory || 'icon-color-home'} />
      <InstagramIcon atualCategory={atualCategory || 'icon-color-home'} />
    </div>
  )
}
