import React, {useState} from 'react'
import { BannerContent, BannerBg, Banner, BannerH1, ArrowForward, ArrowRight } from '../BannerHome/BannerElements'
import { BannerBg2, BannerContainer2, BannerBtnWrapper } from '../BannerServices/BannerServicesElements'
import { Button } from '../ButtonElement';
import Image from '../../assets/img/bannerbg.png';


const BannerServices = () => {

    const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <BannerContainer2>
        <BannerBg2>
        <Banner src={Image} />
        </BannerBg2>    
            <BannerContent>
                <BannerH1>SERVIÇOS QUE SÓ A FORCHELA 
                 <br></br> OFERECE</BannerH1>
                <BannerBtnWrapper>
                    <Button to='signup'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'              
                        >
                        Faça um orçamento {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </BannerBtnWrapper>
            </BannerContent>
        
    </BannerContainer2>
  )
}

export default BannerServices
