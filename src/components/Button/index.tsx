import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { ButtonContainer } from './styles';

interface IButton {
  title: string
  onClick: MouseEventHandler<HTMLButtonElement>
}
export function Button (props: IButton): JSX.Element {
  return (
    <ButtonContainer onClick={props.onClick}>
      {props.title}
    </ButtonContainer>
  )
}