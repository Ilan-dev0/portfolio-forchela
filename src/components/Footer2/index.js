import React from 'react'
import { Heading } from '../DivInfo/InfoElements'
import { Footer2Container, FooterWrap, FooterLinksContainer, FooterLinksItems, FooterLinkTitle, FooterLink, FooterLinksWrapper } from './Footer2Elements'

const Footer2 = () => {
  return (
    <Footer2Container> 
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinkTitle>Atendimento ao cliente</FooterLinkTitle>
                  <FooterLink to="https://api.whatsapp.com/message/HZGY2ELC6CGBM1?autoload=1&app_absent=0">(11)9999-9999</FooterLink>
                  <FooterLink to="/services">forchela@forchela.com</FooterLink>          
              </FooterLinksItems>
              <FooterLinksItems>
                <FooterLinkTitle>Forchela</FooterLinkTitle>
                  <FooterLink to="/services">Serviços</FooterLink>
                  <FooterLink to="/about">Sobre Nós</FooterLink>     
              </FooterLinksItems>
              <FooterLinksItems>
                <FooterLinkTitle>Siga-nos</FooterLinkTitle>
                  <FooterLink to="/services">Instagram</FooterLink>
                  <FooterLink to="/services">Facebook</FooterLink>           
              </FooterLinksItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
    </Footer2Container>
  )
}

export default Footer2
