import React, {useState} from 'react'
import Forchela from '../../assets/img/Branca1.png'
import { Button } from '../ButtonElement'
import { ButtonSubmit, ContatoWrapper, EmailInput, FooterContainer, NameInput, TextInput, Title, BtnWrapper, LogoWrapper, LogoImg, FooterWrapper, BudgetWrapper, FormOrcamento } from './FooterElements'
import emailjs from "emailjs-com"

const Footer = () => {

    const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

    function sendEmail(e){
      e.preventDefault();

      emailjs.sendForm('service_b0p5eve', 
      'template_wm3aiwm',  
      e.target, 
      'r1kWaGXaJb4yDq_WS').then(res=>{
        console.log(res);
      }).catch(err=> console.log(err));
    }

  return (
    <FooterContainer id="contato" >
      <BudgetWrapper>
        <ContatoWrapper>
            <Title>FAÇA SEU ORÇAMENTO</Title>
            <FormOrcamento onSubmit={sendEmail}>
            <NameInput placeholderTextColor="#fff" placeholder='Insira seu nome' className="form-control" name="name" />
            <EmailInput placeholderTextColor="#fff" placeholder='Insira seu email' className="form-control" name='user_email' />
            <TextInput placeholderTextColor="#fff" placeholder='Escreva sua mensagem' Name='message' className="form-control" rows='4' />
            </FormOrcamento>
            <BtnWrapper>
            <Button onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            fontBig='true'
            big='true'>Enviar</Button>
            </BtnWrapper>
        </ContatoWrapper>
        <LogoWrapper>
          <LogoImg src={Forchela} />
        </LogoWrapper>
      </BudgetWrapper>
    </FooterContainer>
  )
}

export default Footer
