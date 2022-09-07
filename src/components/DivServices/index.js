import React from 'react'
import { useState } from 'react'
import ImgBg from '../../assets/img/image1.png'
import { ServicesContainer, ServicesRightWrapper, ServicesLeftWrapper, ImgCard, BgImg, TextWrapper, ServicesH1, ServicesP, CardButtonWrapper, BtnLink } from './ServicesElements'
import { ArrowForward } from '../BannerHome/BannerElements'
import { Button } from '../ButtonElement'

const DivServices = ( toggle ) => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <ServicesContainer>
      <ServicesRightWrapper>
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
              <BtnLink to="contato">
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
              <BtnLink to="contato">
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
              <BtnLink to="contato">
              <ArrowForward />
              </BtnLink>
            </Button>
          </CardButtonWrapper>
          </TextWrapper>
        </ImgCard>
        
      </ServicesRightWrapper>

      <ServicesLeftWrapper>
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
              <BtnLink to="contato">
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
              <BtnLink to="contato">
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
              <BtnLink to="contato">
              <ArrowForward />
              </BtnLink>
            </Button>
          </CardButtonWrapper>
          </TextWrapper>
        </ImgCard>
        
      </ServicesLeftWrapper>
    </ServicesContainer>
  )
}

export default DivServices
