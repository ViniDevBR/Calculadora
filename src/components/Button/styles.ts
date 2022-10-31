import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 1rem;
  border-radius: 1rem;
  color:${props=> props.color};
  background-color: transparent;
  width: 100%;
  font-size: 2.5rem;
  filter: drop-shadow(2px 2px 2px #000);
  transition: all .5s;
  
  &:hover {
    transform: scale(1.4);
    filter: brightness(3) drop-shadow(10px 10px 5px #000);
  }
`

export const Img = styled.img`
  width: 30px;
`
