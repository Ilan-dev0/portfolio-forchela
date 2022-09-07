import React from 'react'
import { useState } from 'react'
import { TextWrapper2, CardButtonWrapper, AboutContainer, AboutWrapper, MeioWrapper, TitleH1, AboutH1, AboutN, AboutP, TextWrapper, BaixoWrapper, Title1Wrapper, Title2Wrapper } from './DivAboutElements'
import { BtnLink } from '../DivMeio/MeioElements'
import { ArrowForward } from '../BannerHome/BannerElements'
import { Button } from '../ButtonElement'


const DivAbout = () => {

    const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <AboutContainer>
        <AboutWrapper>
            <MeioWrapper>
                <TextWrapper>
                    <AboutH1>TÍTULO</AboutH1>
                    <AboutN>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum odio libero, a scelerisque leo interdum a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti</AboutN>
                    <AboutP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum odio libero, a scelerisque leo interdum a. Duis vel erat id sapien faucibus venenatis sit amet vel lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum diam leo, rhoncus ut euismod non, dictum sodales lectus. Quisque ornare sodales nisl, at luctus orci imperdiet vitae. Nam massa metus, fringilla vel lobortis et, dictum nec lacus. Donec rutrum ipsum ac eleifend varius.</AboutP>
                </TextWrapper>
            </MeioWrapper>

            <BaixoWrapper>
                <Title2Wrapper>
                    <TextWrapper2>
                        <TitleH1>Lorem ipsum dolor sit amet</TitleH1>
                        <AboutP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum odio libero, a scelerisque leo interdum a. Duis vel erat id sapien faucibus venenatis sit amet vel lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum diam leo, rhoncus ut euismod non, dictum sodales lectus. Quisque ornare sodales nisl, at luctus orci imperdiet vitae. Nam massa metus, fringilla vel lobortis et, dictum nec lacus. Donec rutrum ipsum ac eleifend varius.</AboutP>
                    </TextWrapper2>
                </Title2Wrapper>
                <Title1Wrapper>
                    <TextWrapper>
                        <AboutH1>Lorem ipsum dolor sit amet</AboutH1>
                        <AboutP>Lorem ipsum dolor sit amet, conciociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum diam leo, rhoncus ut euismod non, dictum sodales lectus. Quisque ornare sodales nisl, at luctus orci imperdiet vitae. Nam massa metus, fringilla vel lobortis et, dictum nec lacus. Donec rutrum ipsum ac eleifend varius.</AboutP>
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
                </Title1Wrapper>
            </BaixoWrapper>
        </AboutWrapper>
    </AboutContainer>
  )
}

export default DivAbout
