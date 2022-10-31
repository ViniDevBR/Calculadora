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


  function handleAddNumber(number: string) {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  }
  function handleClearDisplay() {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }
  function handleEraseNumber() {

    if (currentNumber !== '0') {
      const remove = currentNumber.slice(0, -1);
      setCurrentNumber(remove);
    }
    if (currentNumber.length === 1) {
      const replaceNumber = currentNumber.replace(currentNumber[0], '0');
      setCurrentNumber(replaceNumber);
    }
  }
  function handleSumNumber() {

    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    }
    else {
      function sum() {
        return Number(firstNumber) + Number(currentNumber);
      }
      setCurrentNumber(String(sum()));
      setOperation('');
    }
  }
  function handleMinusNumber() {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    }
    else {
      function sub() {
        return Number(firstNumber) - Number(currentNumber);
      }
      setCurrentNumber(String(sub()));
      setOperation('');
    }
  }
  function handleDivNumber() {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    }
    else {
      function sub() {
        const calculate = Number(firstNumber) / Number(currentNumber);
        return calculate.toFixed(3);
      }
      setCurrentNumber(String(sub()));
      setOperation('');
    }
  }
  function handleMultNumber() {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*');
    }
    else {
      function sub() {
        return Number(firstNumber) * Number(currentNumber);
      }
      setCurrentNumber(String(sub()));
      setOperation('');
    }
  }
  function handlePercentageNumber() {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('%');
    }
    else {
      function percentage() {
        const calculate = (Number(firstNumber) / 100) * Number(currentNumber);
        return calculate.toFixed(3);
      }
      setCurrentNumber(String(percentage()));
      setOperation('');
    }
  }
  function handleSignalNumber() {
    if (currentNumber !== '0')
      setCurrentNumber(prev => `${prev.includes('-') ? prev.slice(1) : '-' + prev}`);
  }
  function handleEquals() {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleMinusNumber();
          break;
        case '/':
          handleDivNumber();
          break;
        case '*':
          handleMultNumber();
          break;
        case '%':
          handlePercentageNumber();
          break;
      }
    }
  }
  
  
  return (
    <Container>
      <Content>
        <Display value={currentNumber} />
        <Row>
          <Button color='#FFFFFF' onClick={handleClearDisplay} title='AC'/>
          <Button color='#FFFFFF' onClick={handleSignalNumber} title='&#177;' />
          <Button color='#FFFFFF' onClick={handlePercentageNumber} title='%'/>
          <Button color='#CD6FEE' onClick={handleDivNumber} title='÷'/>
        </Row>
        <Row>
          <Button color='#ADA8AC' onClick={() => handleAddNumber('7')} title='7'/>
          <Button color='#ADA8AC' onClick={() => handleAddNumber('8')} title='8'/>
          <Button color='#ADA8AC' onClick={() => handleAddNumber('9')} title='9'/>
          <Button color='#CD6FEE' onClick={handleMultNumber} title='x'/>
        </Row>
        <Row>
          <Button color='#ADA8AC' onClick={() => handleAddNumber('4')} title='4'/>
          <Button color='#ADA8AC' onClick={() => handleAddNumber('5')} title='5'/>
          <Button color='#ADA8AC' onClick={() => handleAddNumber('6')} title='6'/>
          <Button color='#CD6FEE' onClick={handleMinusNumber} title='-'/>
        </Row>
        <Row>
          <Button color='#ADA8AC' onClick={() => handleAddNumber('1')} title='1'/>
          <Button color='#ADA8AC' onClick={() => handleAddNumber('2')} title='2'/>
          <Button color='#ADA8AC' onClick={() => handleAddNumber('3')} title='3'/>
          <Button color='#CD6FEE' onClick={handleSumNumber} title='+'/>
        </Row>
        <Row>
          <Button color='#ADA8AC' onClick={() => handleAddNumber('0')} title='0'/>
          <Button color='#ADA8AC' onClick={() => handleAddNumber('.')} title='.'/>
          <Button color='#ADA8AC' onClick={handleEraseNumber} image='/backspace.svg'/>
          <Button color='#CD6FEE' onClick={handleEquals} title='='/>
        </Row>
      </Content>
    </Container>
  )
}
