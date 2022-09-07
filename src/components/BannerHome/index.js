import React, {useState} from 'react'
import Image from '../../assets/img/bannerbg.png';
import { Button } from '../ButtonElement';
import { BannerContainer, BannerContent, BannerBg, Banner, BannerH1, BannerP, BannerBtnWrapper, ArrowForward, ArrowRight } from './BannerElements'
 
const BannerHome = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <BannerContainer id="home">
      <BannerBg>
        <Banner src={Image} />
      </BannerBg>
      <BannerContent>
        <BannerH1>CONHEÇA A ARTE 
         <br></br> NO METAL</BannerH1>
        <BannerP>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum odio libero, a scelerisque leo interdum a.  
        </BannerP>
        <BannerBtnWrapper>
          <Button to="contato" 
           onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            
            >
            Faça um orçamento {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </BannerBtnWrapper>
      </BannerContent>
    </BannerContainer>
  )
}

export default BannerHome
