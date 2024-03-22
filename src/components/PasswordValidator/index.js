// Write your code here
import {useState} from "react";
import {
  MainContainer,
  CardContainer,
  Heading,
  ParaDescription,
  InputElement,
  ErrorPara,
} from './styledComponents'

const PasswordValidator = () => {
  const[userInput,setUserInput] = useState("")
  const changeInput = (event) =>{
    setUserInput(event.target.value)
  }

  
  return (
    <MainContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <ParaDescription>
          Check how strong and secure is your password
        </ParaDescription>
        <InputElement type="password" value={userInput} onChange={changeInput}/>
        {userInput.length < 8 && <ErrorPara>Your password must be at least 8 characters</ErrorPara>}
      </CardContainer>
    </MainContainer>
  )
}
export default PasswordValidator
