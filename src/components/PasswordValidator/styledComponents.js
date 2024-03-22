// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
    background-color: #24263c;
    padding: 40px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
export const CardContainer = styled.div`
    background-color: #383a4e;
    padding: 30px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Heading = styled.h1`
    font-family: "Roboto";
    font-size: 48px;
    font-weight: 600;
    color: #ffffff;
`
export const ParaDescription = styled.p`
    font-family: "Roboto";
    font-size: 22px;
    color: #f8fafc;
    font-weight: normal;
`
export const InputElement = styled.input`
    height: 60px;
    width: 450px;
    padding: 5px;
    font-family:"Roboto";
    font-size: 26px;
    color: #434451;
    outline: none;
    margin-top: 50px;
`
export const ErrorPara = styled.p`
    font-family: "Roboto";
    font-size: 16px;
    color: #ef4444;
    line-height: 0.1;
`
