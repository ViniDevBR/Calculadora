//REACT
import { useState } from 'react';
//STYLES
import { Container, Content, Row } from './styles/styles';

//COMPONENTE
import { Display } from './components/Display';
import { Button } from './components/Button';


export function App(): JSX.Element {
  const [currentNumber, setCurrentNumber] = useState<string>('0')
  const [firstNumber, setFirstNumber] = useState<string>('0')
  const [operation, setOperation] = useState<string>('')

  const handleAddNumber = (number: string) =>{
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }
  const clearDisplay = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }
  const eraseNumber = () => {
    
    if (currentNumber !=='0'){
      const remove = currentNumber.slice(0, -1)

      setCurrentNumber(remove)
    }
  }
  const addNumber = () => {
    
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('+')
    } 
     else {
      function sum() {
        return Number(firstNumber) + Number(currentNumber)
      }
      setCurrentNumber(String(sum()))
      setOperation('')
     }
  }
  const MinusNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('-')
    } 
     else {
      function sub() {
        return Number(firstNumber) - Number(currentNumber) 
      }
      setCurrentNumber(String(sub()))
      setOperation('')
     }
  }
  const DivNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('/')
    } 
     else {
      function sub() {
        return Number(firstNumber) / Number(currentNumber) 
      }
      setCurrentNumber(String(sub()))
      setOperation('')
     }
  }
  const MultNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('*')
    } 
     else {
      function sub() {
        return Number(firstNumber) * Number(currentNumber) 
      }
      setCurrentNumber(String(sub()))
      setOperation('')
     }
  }
  const PercentageNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
    } 
     else {
      function sub() {
        return Number(firstNumber) * Number(currentNumber) 
      }
      setCurrentNumber(String(sub()))
     }
  }
  const ChangeSignalNumber = () => {
    if(currentNumber !== '0')
      setCurrentNumber(prev => `${prev.includes('-') ? prev.slice(1) : '-'+prev}`)
  }
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          addNumber()
            break
        case '-':
          MinusNumber()
            break
        case '/':
          DivNumber()
            break
        case '*':
          MultNumber()
            break
      }
    } 
  }
  return (
    <Container>
      <Content>
        <Display value={currentNumber} />
        <Row>
          <Button onClick={clearDisplay} title='AC'/>
          <Button onClick={ChangeSignalNumber} title='&#177;' />
          <Button onClick={PercentageNumber} title='%'/>
          <Button onClick={DivNumber} title='÷'/>
        </Row>
        <Row>
          <Button onClick={() => handleAddNumber('7')} title='7'/>
          <Button onClick={() => handleAddNumber('8')} title='8'/>
          <Button onClick={() => handleAddNumber('9')} title='9'/>
          <Button onClick={MultNumber} title='x'/>
        </Row>
        <Row>
          <Button onClick={() => handleAddNumber('4')} title='4'/>
          <Button onClick={() => handleAddNumber('5')} title='5'/>
          <Button onClick={() => handleAddNumber('6')} title='6'/>
          <Button onClick={MinusNumber} title='-'/>
        </Row>
        <Row>
          <Button onClick={() => handleAddNumber('1')} title='1'/>
          <Button onClick={() => handleAddNumber('2')} title='2'/>
          <Button onClick={() => handleAddNumber('3')} title='3'/>
          <Button onClick={addNumber} title='+'/>
        </Row>
        <Row>
          <Button onClick={() => handleAddNumber('0')} title='0'/>
          <Button onClick={() => handleAddNumber('.')} title='.'/>
          <Button onClick={eraseNumber} image='/backspace.svg'/>
          <Button onClick={handleEquals} title='='/>
        </Row>
      </Content>
    </Container>
  )
}
