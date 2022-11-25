//REACT
import { ChangeEvent, useState } from 'react';

//STYLES
import { Container, Content, Row } from './styles/styles';

//COMPONENTE
import { Display } from './components/Display';
import { Button } from './components/Button';


export function App(): JSX.Element {
  const [currentNumber, setCurrentNumber] = useState<string>('0')
  const [display, setDisplay] = useState<string>('0')
  const [cont, setCont] = useState(0)


  function handleAddNumber(number: string) {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
    setCont(0)
  }
  function handleClearDisplay() {
    setCurrentNumber('0');
    setDisplay('0')
    setCont(0)
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
  function resultado(){
    try {
      const replaceX = currentNumber.replaceAll('x', '*')
      const calculate = Number(eval(replaceX))
      setDisplay(calculate.toFixed(2))
    } catch (error) {
      setDisplay('ERRO')
    }
  }
  function signalOperation(signal: string) {
    const verification = signal == '+' || '-' || '*' ||  '/' ||  '.'
    if (verification && cont == 0) {
      handleAddNumber(signal)
      setCont(1)
      return
    }
  }
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setCurrentNumber(e.target.value)
  }

  return (
    <Container>
      <Content>
        <Display value={currentNumber} onChange={handleOnChange} />
        <Display displayType='result' value={display} disabled/>
        <Row>
          <Button onClick={handleClearDisplay} title='AC'/>
          <Button onClick={() => handleAddNumber('(')} title='(' />
          <Button onClick={() => handleAddNumber(')')} title=')'/>
          <Button color='tertiary' font={false} onClick={() => signalOperation('/')} title='÷'/>
        </Row>
        <Row>
          <Button color='secondary' onClick={() => handleAddNumber('7')} title='7'/>
          <Button color='secondary' onClick={() => handleAddNumber('8')} title='8'/>
          <Button color='secondary' onClick={() => handleAddNumber('9')} title='9'/>
          <Button color='tertiary' onClick={() => signalOperation('x')} title='x'/>
        </Row>
        <Row>
          <Button color='secondary' onClick={() => handleAddNumber('4')} title='4'/>
          <Button color='secondary' onClick={() => handleAddNumber('5')} title='5'/>
          <Button color='secondary' onClick={() => handleAddNumber('6')} title='6'/>
          <Button color='secondary' onClick={() => signalOperation('-')} image='/minus.svg'/>
        </Row>
        <Row>
          <Button color='secondary' onClick={() => handleAddNumber('1')} title='1'/>
          <Button color='secondary' onClick={() => handleAddNumber('2')} title='2'/>
          <Button color='secondary' onClick={() => handleAddNumber('3')} title='3'/>
          <Button onClick={() => signalOperation('+')} image='/plus.svg'/>
        </Row>
        <Row>
          <Button color='secondary' onClick={() => handleAddNumber('0')} title='0'/>
          <Button color='secondary' onClick={() => signalOperation('.')} title='.'/>
          <Button color='secondary' onClick={handleEraseNumber} image='/backspace.svg'/>
          <Button font={false} onClick={resultado} bgColor={true} title='='/>
        </Row>
      </Content>
    </Container>
  )
}
