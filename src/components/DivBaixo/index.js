import { Carousel } from 'bootstrap'
import React from 'react'
import { BaixoContainer, BaixoWrapper, CarouselImage, CarouselImageCard, CarouselWrapper, Heading, Subtitle, TextWrapper, CarouselLink } from './BaixoElements'
import Image1 from '../../assets/img/image1.png'
import Image2 from '../../assets/img/image2.png'
import Image3 from '../../assets/img/image3.png'

const DivBaixo = () => {
  return (
    <BaixoContainer>
        <BaixoWrapper>
            <TextWrapper>
                <Heading>MOVÉIS MAIS REFINADOS DO MERCADO</Heading>
                <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. odio libero, a scelerisque leo interdum a. Duis vel erat sapien faucibus venenatis sit amet vel lectus.  Class aptent taciti sociosqu ad litora  per conubia nostra, per inceptos.</Subtitle>
            </TextWrapper>
            <CarouselWrapper>
              <CarouselImageCard>
                <CarouselLink to="/services">
                  <CarouselImage src={Image1} />
                </CarouselLink>
                <CarouselLink to="/services">
                  <CarouselImage src={Image2} />
                </CarouselLink>
                <CarouselLink to="/services">
                  <CarouselImage src={Image3} />
                </CarouselLink>
              </CarouselImageCard>
            </CarouselWrapper>
        </BaixoWrapper>
    </BaixoContainer>
  )
}

export default DivBaixo
