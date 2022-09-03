import React, {useState} from 'react'
import { BannerContent, BannerBg, Banner, BannerH1, BannerBtnWrapper, ArrowForward, ArrowRight } from '../BannerHome/BannerElements'
import { BannerBg2, BannerContainer2 } from '../BannerServices/BannerServicesElements'
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
            <BannerContent>
                <BannerH1>SERVIÇOS QUE SÓ A FORCHELA OFERECE</BannerH1>
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
        </BannerBg2>
    </BannerContainer2>
  )
}

export default BannerServices
