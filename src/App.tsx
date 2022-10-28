//REACT
import { useState } from 'react';
//STYLES
import { Container, Content, Row } from './styles/styles';

//COMPONENTE
import { Display } from './components/Display';
import { Button } from './components/Button';


export function App(): JSX.Element {
  const [currentNumber, setCurrentNumber] = useState<string>('0')

  function handleAddNumber(number: string){
    setCurrentNumber((prev => `${prev === '0' ? '' : prev}${number}`))
  }
  function cleanDisplay(){
    setCurrentNumber('0')
  }
  return (
    <Container>
      <Content>
        <Display value={currentNumber} />
        <Row>
          <Button onClick={cleanDisplay} title='AC'/>
          <Button onClick={() => {}} title='&#177;' />
          <Button onClick={() => {}} title='%'/>
          <Button onClick={() => {}} title='÷'/>
        </Row>
        <Row>
          <Button onClick={() => handleAddNumber('7')} title='7'/>
          <Button onClick={() => handleAddNumber('8')} title='8'/>
          <Button onClick={() => handleAddNumber('9')} title='9'/>
          <Button onClick={() => {}} title='x'/>
        </Row>
        <Row>
          <Button onClick={() => handleAddNumber('4')} title='4'/>
          <Button onClick={() => handleAddNumber('5')} title='5'/>
          <Button onClick={() => handleAddNumber('6')} title='6'/>
          <Button onClick={() => {}} title='-'/>
        </Row>
        <Row>
          <Button onClick={() => handleAddNumber('1')} title='1'/>
          <Button onClick={() => handleAddNumber('2')} title='2'/>
          <Button onClick={() => handleAddNumber('3')} title='3'/>
          <Button onClick={() => {}} title='+'/>
        </Row>
        <Row>
          <Button onClick={() => handleAddNumber('0')} title='0'/>
          <Button onClick={() => handleAddNumber('.')} title='.'/>
          <Button onClick={() => {}} title='L'/>
          <Button onClick={() => {}} title='='/>
        </Row>
      </Content>
    </Container>
  )
}
