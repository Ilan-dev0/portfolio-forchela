import React, {useState} from 'react'
import { Banner } from '../BannerHome/BannerElements'
import Image from '../../assets/img/bannerbg.png';
import { BannerBg3, BannerContainer3 } from './BannerAboutElements'

const BannerAbout = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <BannerContainer3>
        <BannerBg3>
            <Banner src={Image} />
        </BannerBg3>
    </BannerContainer3>
  )
}

export default BannerAbout
