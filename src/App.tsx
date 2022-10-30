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
  const handleClearDisplay = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }
  const handleEraseNumber = () => {
    
    if (currentNumber !=='0'){
      const remove = currentNumber.slice(0, -1)
      setCurrentNumber(remove)
    }
    if (currentNumber.length === 1) {
      const replaceNumber = currentNumber.replace(currentNumber[0],'0')
      setCurrentNumber(replaceNumber)
    }
  }
  const handleSumNumber = () => {
    
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
  const handleMinusNumber = () => {
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
  const handleDivNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('/')
    } 
     else {
      function sub() {
        const calculate = Number(firstNumber) / Number(currentNumber)
        return calculate.toFixed(3)
      }
      setCurrentNumber(String(sub()))
      setOperation('')
     }
  }
  const handleMultNumber = () => {
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
  const handlePercentageNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('%')
    } 
     else {
      function percentage() {
        const calculate = (Number(firstNumber)/100) * Number(currentNumber)
        return calculate
      }
      setCurrentNumber(String(percentage()))
      setOperation('')
     }
  }
  const handleSignalNumber = () => {
    if(currentNumber !== '0')
      setCurrentNumber(prev => `${prev.includes('-') ? prev.slice(1) : '-'+prev}`)
  }
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumber()
            break
        case '-':
          handleMinusNumber()
            break
        case '/':
          handleDivNumber()
            break
        case '*':
          handleMultNumber()
            break
        case '%':
          handlePercentageNumber()
            break
     }
    } 
  }
  
  
  return (
    <Container>
      <Content>
        <Display value={currentNumber} />
        <Row>
          <Button onClick={handleClearDisplay} title='AC'/>
          <Button onClick={handleSignalNumber} title='&#177;' />
          <Button onClick={handlePercentageNumber} title='%'/>
          <Button onClick={handleDivNumber} title='÷'/>
        </Row>
        <Row>
          <Button onClick={() => handleAddNumber('7')} title='7'/>
          <Button onClick={() => handleAddNumber('8')} title='8'/>
          <Button onClick={() => handleAddNumber('9')} title='9'/>
          <Button onClick={handleMultNumber} title='x'/>
        </Row>
        <Row>
          <Button onClick={() => handleAddNumber('4')} title='4'/>
          <Button onClick={() => handleAddNumber('5')} title='5'/>
          <Button onClick={() => handleAddNumber('6')} title='6'/>
          <Button onClick={handleMinusNumber} title='-'/>
        </Row>
        <Row>
          <Button onClick={() => handleAddNumber('1')} title='1'/>
          <Button onClick={() => handleAddNumber('2')} title='2'/>
          <Button onClick={() => handleAddNumber('3')} title='3'/>
          <Button onClick={handleSumNumber} title='+'/>
        </Row>
        <Row>
          <Button onClick={() => handleAddNumber('0')} title='0'/>
          <Button onClick={() => handleAddNumber('.')} title='.'/>
          <Button onClick={handleEraseNumber} image='/backspace.svg'/>
          <Button onClick={handleEquals} title='='/>
        </Row>
      </Content>
    </Container>
  )
}
