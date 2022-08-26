import styled from "styled-components";

export const BaixoContainer = styled.div`
height: 541px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
background: #fff;

@media screen and (max-width: 768px){
  height: 1100px;
}

@media screen and (max-width: 480px){
  height: 1300px;
}
`

export const BaixoWrapper = styled.div`
  height: 460px;
  width: 100%;
  max-width: 1800px;
  border-bottom: 2px solid #000;
  border-top: 2px solid #000;

  @media screen and (max-width: 768px){
    
    flex-direction: column;
  }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    margin: 80px;
    margin-top: 10;
    display: flex;
    flex-direction: column
`

export const Heading = styled.h1`
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 30px;

  @media screen and (max-width: 480px){
    font-size: 32px;  
  }
`

export const Subtitle = styled.p`
  color: #656079;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`

export const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 950px;
  max-height: 380px;
  display: flex;
  flex-direction: column
  margin: 30px;
`