import { MouseEventHandler } from 'react';
import { ButtonContainer, Img } from './styles';

interface IButton {
  title?: string
  onClick: MouseEventHandler<HTMLButtonElement>
  image?: string
}
export function Button (props: IButton): JSX.Element {
  return (
    <ButtonContainer onClick={props.onClick}>
      {props.title}
      <Img src={props.image} />
    </ButtonContainer>
  )
}