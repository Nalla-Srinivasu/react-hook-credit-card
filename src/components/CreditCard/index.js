// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  LeftContainer,
  RightContainer,
  CardContainer,
  PaymentHeading,
  CardNumInput,
  CardHolderNameInput,
  ContainerHeading,
  ImageContainer,
  CardNumber,
  NameHeading,
  HolderName,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardName] = useState('')

  const onChangeNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeName = event => {
    setCardName(event.target.value)
  }

  return (
    <MainContainer>
      <LeftContainer>
        <ContainerHeading>CREDIT CARD</ContainerHeading>
        <ImageContainer>
          <CardNumber>{cardNumber}</CardNumber>
          <NameHeading>CARDHOLDER NAME</NameHeading>
          <HolderName>{cardHolderName.toUpperCase()}</HolderName>
        </ImageContainer>
      </LeftContainer>
      <RightContainer>
        <CardContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <CardNumInput
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeNumber}
          />
          <CardHolderNameInput
            placeholder="Cardholder Name"
            value={cardHolderName}
            onChange={onChangeName}
          />
        </CardContainer>
      </RightContainer>
    </MainContainer>
  )
}

export default CreditCard
