import React from 'react'
import { Heading } from '../DivInfo/InfoElements'
import { Footer2Container, Footer2Wrapper, Title, Text, TextWrapper } from './Footer2Elements'

const Footer2 = () => {
  return (
    <Footer2Container> 
        <TextWrapper>
            <Title>Atendimento ao Cliente</Title>
            <Text>(11)9999-9999</Text>          
            <Text>Forchela@forchela.com</Text>
        </TextWrapper> 
        <TextWrapper>
            <Title>Forchela</Title>
            <Text>Serviços</Text>
            <Text>Sobre Nós</Text>
        </TextWrapper>     
        <TextWrapper>
            <Title>Siga-nos</Title>
            <Text>Instagram</Text>
            <Text>Facebook</Text>
        </TextWrapper>    
        
    </Footer2Container>
  )
}

export default Footer2
