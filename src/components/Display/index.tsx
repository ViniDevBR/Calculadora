import { DisplayContainer } from './styles';

interface IInput {
  value: string
}
export function Display ({value}: IInput): JSX.Element {
  return (
    <DisplayContainer>
      <input disabled value={value}/>
    </DisplayContainer>
  )
}