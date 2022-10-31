import styled, { css } from "styled-components";
interface IButton {
  color: string
  font: boolean
  bgColor: boolean
}
export const ButtonContainer = styled.button<IButton>`
  ${props => props.color === 'primary' && css`
    color: #FFFFFF;
  `}
  ${props => props.color === 'secondary' && css`
    color: #ADA8AC;
  `}
  ${props => props.color === 'tertiary' && css`
    color: #dd93f8;
  `}
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 1rem;
  border-radius: 1rem;
  background-color: transparent;
  ${props => props.bgColor === true && css`
    background-color: #8347B5;
  `}
  width: 100%;
  height: 10vh;
  font-size: 2.5rem;
  ${props => props.font === false && css`
    font-size: 4rem;
  `}
  font-weight: 100;
  filter: drop-shadow(2px 2px 2px #000);
  transition: all .5s;
  
  &:hover {
    transform: scale(1.2);
    filter: brightness(1.4) drop-shadow(10px 10px 5px #000);
  }
`

export const Img = styled.img`
  width: 40px;
`
