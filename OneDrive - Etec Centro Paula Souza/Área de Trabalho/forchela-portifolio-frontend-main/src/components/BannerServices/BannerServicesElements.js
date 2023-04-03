import styled from "styled-components";

export const BannerContainer2 = styled.div`
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

export const BannerBg2 = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;    
`

export const BannerBtnWrapper = styled.div`
  margin-top: 32px;
  margin-right: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (max-width: 768px){
    margin-right: 45%;
  }
`