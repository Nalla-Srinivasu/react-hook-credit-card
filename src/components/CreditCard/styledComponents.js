// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const LeftContainer = styled.div`
  background-color: #3b4b69;
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const RightContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const CardContainer = styled.div`
  background-color: #ffffff;
  width: 400px;
  height: 250px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 #c3cad9, 0 6px 20px 0 #c3cad9;
`

export const PaymentHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
`

export const CardNumInput = styled.input`
  background-color: transparent;
  border: 1px solid #d3d9e0;
  border-radius: 3px;
  height: 35px;
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
`

export const CardHolderNameInput = styled.input`
  background-color: transparent;
  border: 1px solid #d3d9e0;
  border-radius: 3px;
  padding: 10px;
  height: 35px;
  width: 300px;
`

export const ContainerHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  display: inline-block;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 4px;
    background-color: #ffd773;
  }
`

export const HeadingSpan = styled.span`
  position: relative;
  display: inline-block;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 4px;
    background-color: #ffd773;
  }
`

export const ImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 250px;
  width: 450px;
  border-radius: 25px;
`

export const CardNumber = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  position: relative;
  padding-left: 50px;
  padding-top: 50px;
`

export const NameHeading = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  position: relative;
  padding-left: 50px;
`

export const HolderName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  position: relative;
  padding-left: 50px;
`
