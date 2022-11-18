import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';


export const BannerContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-right: -80px;
  padding-left: 10%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.87) 0%, #000000 100%);
  display: flex;
  justify-content: start;
  align-items: center;
  height: 720px;
  position: relative;
  z-index: 5;

  @media screen and (max-width: 768px){
    
  }
`

export const BannerBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;    
  `

export const Banner = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.87) 0%, #000000 100%);  
  z-index: 3;
  opacity: 0.1
`

export const BannerContent = styled.div`
  z-index: 3;
  max-width: 1600px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  
`

export const BannerH1 = styled.h1`
  color: #fff;
  font-size: 60px;
  

  @media screen and (max-width: 768px){
    font-size: 40px;
  }

  @media screen (max-width: 480px) {
    font-size: 32px;
  }
`

export const BannerP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  
  max-width: 600px;

  @media screen and (max-width: 768px){
    font-size: 24px;
  }

  @media screen (max-width: 480px) {
    font-size: 18px;
  }
`

export const BannerBtnWrapper = styled.div`
  margin-top: 32px;
  margin-right: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px){
    margin-right: 35%;
  }
  
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;

`