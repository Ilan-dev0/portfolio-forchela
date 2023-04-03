import styled from "styled-components";

export const AboutContainer = styled.div`
    padding: 18px 34px;
    background: #fff;
    display: flex;
    margin: 10px;
    height: 100%;
    position: relative;
    z-index: 5;

    @media screen and (max-width: 768px){
        margin-top: 20px;
        padding-left: 10%;
        height: 1800px;
      }

      
`

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: auto;
    min-width: auto;
    margin: 0 auto;

    @media screen and (max-width: 768px){
        padding: 0;
        margin: 0 auto;
        justify-content: none;
        align-items: none;
    }
`

export const MeioWrapper = styled.div`
    display: flex;

    flex-direction: row;
    max-width: auto;
    min-width: auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
    background: #0D0D0D;

    @media screen and (max-width: 768px){
        
        
      }
`

export const BaixoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: auto;
    min-width: auto;
    height: 557px;
    background: #fff;
    
    @media screen and (max-width: 768px){
        flex-direction: column;
        
      }
`

export const TextWrapper = styled.div`
    padding: 50px;
    justify-content: center;
    align-items: center;
    margin: 30px;
    padding: 30px;
    max-width: auto;
    min-width: auto;
    border-radius: 10px;

    
`

export const TextWrapper2 = styled.div`
    padding: 50px;
    justify-content: center;
    align-items: center;
    margin: 30px;
    padding: 30px;
    max-width: auto;
    min-width: auto;
    border-radius: 10px;

    @media screen and (max-width: 768px){
        display: none;
        
    }

    
`

export const Title2Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    max-width: auto;
    min-width: auto;
    background: #fff

    
`

export const Title1Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    max-width: auto;
    min-width: auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
    margin: 30px;
    background: #0D0D0D;

    @media screen and (max-width: 768px){
        margin-top: 300px;
        
    }
    
`

export const AboutH1 = styled.h1`
    color: #fff;
    margin-bottom: 35px;
    font-size: 40px;
    line-height: 1.1;
    
    font-weight: 600;

    @media screen and (max-width: 768px){
        font-size: 28px;
        
    }
`

export const TitleH1 = styled.h1`
    color: #000 ;
    margin-bottom: 35px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;

    @media screen and (max-width: 768px){
        font-size: 28px;
        
    }
`

export const AboutN = styled.p`
    color: #fff;
    font-size: 18px;
    line-height: 24px;
`

export const AboutP = styled.p`
    color: #656079;
    max-width: auto;
    margin-top: 10px;
    font-size: 18px;
    line-height: 24px;

    @media screen and (max-width: 768px){
        font-size: 14px;
        
    }
`

export const AboutT = styled.p`
    color: #656079;
    max-width: auto;
    margin-top: 10px;
    font-size: 18px;
    line-height: 24px;

    @media screen and (max-width: 768px){
        font-size: 14px;
        display: none; 
        
    }
`
      
export const CardButtonWrapper = styled.div`
  margin-right: 70%;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px){
    margin-right: 10%;
    margin-top: 10%;
}
`