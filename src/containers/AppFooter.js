import React from 'react'
import { SOCIAL_URL } from '../libs/constants'
import SocialButton from '../components/SocialButton'
import DiscordIcon from '../assets/images/social/discord.png'
import TwitterIcon from '../assets/images/social/twitter.png'
import InstagramIcon from '../assets/images/social/instagram.png'
import FacebookIcon from '../assets/images/social/facebook.png'
import YoutubeIcon from '../assets/images/social/youtube.png'
import LinkedinIcon from '../assets/images/social/linkedin.png'
import TelegramIcon from '../assets/images/social/telegram.png'

const AppFooter = () => {
  const navigateToSocial = (socialName) => {
    window.open(SOCIAL_URL[`${socialName}`])
  }

  return (
    <div id="app-footer" className="w-full bg-primary-dark">
      <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-4 items-center py-4">
        <p
          id="footer-copyright"
          className="text-white md:text-start text-center sm:text-base text-sm"
        >
          &copy;NiMEDix Ecosystem 2023. All Rights Reserved
        </p>
        <div
          id="footer-social-nav"
          className="lg:text-end md:text-start text-center"
        >
          <SocialButton
            img={DiscordIcon}
            onClick={() => {
              navigateToSocial('discord')
            }}
          />
          <SocialButton
            img={TwitterIcon}
            onClick={() => {
              navigateToSocial('twitter')
            }}
          />
          <SocialButton
            img={InstagramIcon}
            onClick={() => {
              navigateToSocial('instagram')
            }}
          />
          <SocialButton
            img={FacebookIcon}
            onClick={() => {
              navigateToSocial('facebook')
            }}
          />
          <SocialButton
            img={YoutubeIcon}
            onClick={() => {
              navigateToSocial('youtube')
            }}
          />
          <SocialButton
            img={TelegramIcon}
            onClick={() => {
              navigateToSocial('telegram')
            }}
          />
          <SocialButton
            img={LinkedinIcon}
            onClick={() => {
              navigateToSocial('linkedin')
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default AppFooter
