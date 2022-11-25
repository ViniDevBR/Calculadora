import { MouseEventHandler } from 'react';
import { ButtonContainer, Img } from './styles';

interface IButton {
  title?: string
  onClick: MouseEventHandler<HTMLButtonElement>
  image?: string
  bgColor?: boolean
  font?: boolean
  color?: string
  alt?: string
}

export function Button ({color='primary', font=true, bgColor=false, ...props}: IButton): JSX.Element {
  
  return (
    <ButtonContainer title={props.title} bgColor={bgColor} color={color} font={font} onClick={props.onClick}>
      {props.title || <Img src={props.image} alt={props.alt}/>}
    </ButtonContainer>
  )
}