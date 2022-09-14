import styled from "styled-components"
import {Link} from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const ServicesContainer = styled.div`
    margin-top: 20px;
    background: #fff;
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 5;
    

    @media screen and (max-width: 1400px){
        flex-direction: column;
    }
`

export const ServicesRightWrapper = styled.div`
    padding: 40px 24px;     
    margin: 0  auto;
    max-width: auto;
    min-width: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media screen and (max-witdh: 768px){
        
    }
`

export const ServicesLeftWrapper = styled.div`
    padding: 40px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: auto;
        min-width: auto;


`

    export const ImgCard = styled.div`
        display: flex;
        flex-direction: row;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 20px;
        margin: 30px;       
        width: 700px;
        background: #0D0D0D;

        @media screen and (max-width: 768px){
            flex-direction: column;
            width: auto;
            margin: 0;  
            margin-bottom: 30px;
        }
    `

export const BgImg = styled.img`   
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    @media screen and (max-width: 768px){
        width: 330px;
        height: 200px;
        object-fit: cover;
        margin: 0 auto;
      }
`

export const TextWrapper = styled.div`
    padding: 50px;
    justify-content: center;
    align-items: center;
    margin: 30px;
    background: #16141B;


    border-radius: 10px;

    @media screen and (max-width: 768px){
        
        padding: 20px;
      }
`

export const ServicesH1 = styled.h1`
    color: #fff;
    margin-bottom: 35px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;

    @media screen and (max-width: 768px){
        font-size: 30px;
        
    }
`

export const ServicesP = styled.p`
    color: #656079;
      
    margin-bottom: -10px;
    font-size: 18px;
    line-height: 24px;

    @media screen and (max-width: 768px){
        font-size: 1rem;
    }
`

export const ServicesLink = styled(Link)`
    color: #8E8E8E;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover { 
    color: #473B90;
    transition: 0.3s ease-in-out
    }
`

export const CardButtonWrapper = styled.div`
  margin-right: 70%;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px){
    margin-right: 30%;
  }
`

export const BtnLink = styled(LinkS)`
  border-radius: 50px;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`