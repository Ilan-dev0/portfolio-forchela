import React from 'react'
import { Button } from '../ButtonElement';

import { Heading, InfoWrapper, Subtitle, TextWrapper } from './InfoElements'


const DivInfo = () => {
  return (
    <>
      <InfoWrapper>
        <TextWrapper>
            <Heading>Habilidade</Heading>
            <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. odio libero, a scelerisque leo interdum a.  Duis vel erat sapien faucibus venenatis sit amet vel lectus. Class aptent taciti sociosqu ad litora  per conubia </Subtitle>
        </TextWrapper>
        <TextWrapper>
            <Heading>Agilidade</Heading>
            <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. odio libero, a scelerisque leo interdum a.  Duis vel erat sapien faucibus venenatis sit amet vel lectus. Class aptent taciti sociosqu ad litora  per conubia </Subtitle>
        </TextWrapper>
        <TextWrapper>
            <Heading>Qualidade</Heading>
            <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. odio libero, a scelerisque leo interdum a.  Duis vel erat sapien faucibus venenatis sit amet vel lectus. Class aptent taciti sociosqu ad litora  per conubia </Subtitle>
        </TextWrapper>
      </InfoWrapper>
    </>
  )
}

export default DivInfo
