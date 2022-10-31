import { DisplayContainer } from './styles';

interface IInput {
  value: string
}
export function Display (props: IInput): JSX.Element {
  return (
    <DisplayContainer>
      <input disabled value={props.value}/>
    </DisplayContainer>
  )
}