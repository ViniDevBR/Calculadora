import { InputHTMLAttributes } from 'react';
import { DisplayContainer } from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  displayType?: 'result' | 'expression'
}
export function Display ({displayType = 'expression', ...props}: IInput): JSX.Element {
  return (
    <DisplayContainer displayType={displayType}>
      <input {...props}/>
    </DisplayContainer>
  )
}