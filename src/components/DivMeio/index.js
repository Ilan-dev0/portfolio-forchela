import React from 'react'
import { useState } from 'react'
import { Button } from '../ButtonElement'
import image4 from '../../assets/img/image4.png'
import { BtnLink, MeioContainer, MeioWrapper, CardImage, Image, CardText, Title, Text, TextWrapper, CardButtonWrapper} from './MeioElements'

const DivMeio = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <MeioContainer>
      <MeioWrapper>
        <CardImage>
          <Image src={image4} />
        </CardImage>
        <CardText>
          <TextWrapper>
          <Title>SERVIÇO FEITO COM PRECISÃO</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. odio libero, a scelerisque leo interdum a.  Duis vel erat sapien faucibus venenatis sit amet vel lectus. Class aptent taciti sociosqu ad litora  per conubia</Text>
          </TextWrapper>
          <CardButtonWrapper>
          <Button onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            fontBig='true'
            big='true'
            >
              <BtnLink to="/services">
                SAIBA MAIS
              </BtnLink>
            </Button>
          </CardButtonWrapper>
        </CardText>
        
      </MeioWrapper>
    </MeioContainer>
  )
}

export default DivMeio
