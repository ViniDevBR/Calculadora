import { MouseEventHandler } from 'react';
import { ButtonContainer, Img } from './styles';

interface IButton {
  title?: string
  onClick: MouseEventHandler<HTMLButtonElement>
  image?: string
  bgColor?: boolean
  font?: boolean
  color?: string
}

export function Button ({color='primary', font=true, bgColor=false, ...props}: IButton): JSX.Element {
  
  return (
    <ButtonContainer bgColor={bgColor} color={color} font={font} onClick={props.onClick}>
      {props.title || <Img src={props.image} />}
    </ButtonContainer>
  )
}