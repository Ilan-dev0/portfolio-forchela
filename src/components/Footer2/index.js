import React from 'react'
import { Heading } from '../DivInfo/InfoElements'
import { FooterSocial, Footer2Container, FooterWrap, FooterLinksContainer, FooterLinksItems, FooterLinkTitle, FooterLink, FooterLinksWrapper } from './Footer2Elements'

const Footer2 = () => {
  return (
    <Footer2Container> 
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinkTitle>Atendimento ao cliente</FooterLinkTitle>
                  <FooterSocial href="https://api.whatsapp.com/message/HZGY2ELC6CGBM1?autoload=1&app_absent=0">(11) 4236-9810</FooterSocial>
                  <FooterSocial href="">andersoncorrea76@hotmail.com</FooterSocial>          
              </FooterLinksItems>
              <FooterLinksItems>
                <FooterLinkTitle>Forchela</FooterLinkTitle>
                  <FooterLink to="/services">Serviços</FooterLink>
                  <FooterLink to="/about">Sobre Nós</FooterLink>     
              </FooterLinksItems>
              <FooterLinksItems>
                <FooterLinkTitle>Siga-nos</FooterLinkTitle>
                  <FooterSocial href="https://www.instagram.com/forchela.andercorrea/">Instagram</FooterSocial>
                  <FooterSocial href="https://www.facebook.com/profile.php?id=100063039289635">Facebook</FooterSocial>           
              </FooterLinksItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
    </Footer2Container>
  )
}

export default Footer2
