import React from 'react'
import { useState } from 'react'
import ImgBg from '../../assets/img/image1.png'
import { ServicesContainer, ServicesWrapper, ImgCard, BgImg, TextWrapper, ServicesH1, ServicesP, CardButtonWrapper } from './ServicesElements'
import { BtnLink } from '../DivMeio/MeioElements'
import { ArrowForward } from '../BannerHome/BannerElements'
import { Button } from '../ButtonElement'

const DivServices = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <ServicesContainer>
      <ServicesWrapper>
        <ImgCard>
          <BgImg src={ImgBg} />
          <TextWrapper>
            <ServicesH1>TITULO</ServicesH1>
            <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. odio libero, a scelerisque leo interdum a.  Duis vel erat sapien faucibus venenatis sit amet vel lectus. Class aptent</ServicesP>
            <CardButtonWrapper>
          <Button onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            
            >
              <BtnLink to="/services">
              <ArrowForward />
              </BtnLink>
            </Button>
          </CardButtonWrapper>
          </TextWrapper>
        </ImgCard>

        <ImgCard>
          <BgImg src={ImgBg} />
          <TextWrapper>
            <ServicesH1>TITULO</ServicesH1>
            <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. odio libero, a scelerisque leo interdum a.  Duis vel erat sapien faucibus venenatis sit amet vel lectus. Class aptent</ServicesP>
            <CardButtonWrapper>
          <Button onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            
            >
              <BtnLink to="/services">
              <ArrowForward />
              </BtnLink>
            </Button>
          </CardButtonWrapper>
          </TextWrapper>
        </ImgCard>

        <ImgCard>
          <BgImg src={ImgBg} />
          <TextWrapper>
            <ServicesH1>TITULO</ServicesH1>
            <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. odio libero, a scelerisque leo interdum a.  Duis vel erat sapien faucibus venenatis sit amet vel lectus. Class aptent</ServicesP>
            <CardButtonWrapper>
          <Button onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            
            >
              <BtnLink to="/services">
              <ArrowForward />
              </BtnLink>
            </Button>
          </CardButtonWrapper>
          </TextWrapper>
        </ImgCard>
        
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default DivServices