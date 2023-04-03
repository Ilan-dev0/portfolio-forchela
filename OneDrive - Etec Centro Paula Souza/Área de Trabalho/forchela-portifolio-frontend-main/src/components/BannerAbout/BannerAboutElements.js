import styled from "styled-components";

export const BannerContainer3 = styled.div`
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

export const BannerBg3 = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;    
`

export const BannerH1 = styled.h1`
  color: #fff;
  font-size: 60px;
  

  @media screen and (max-width: 768px){
    font-size: 30px;
  }

  @media screen (max-width: 480px) {
    font-size: 32px;
  }
`

export const BannerContent = styled.div`
  z-index: 3;
  max-width: 1600px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  
`