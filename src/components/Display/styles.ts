import styled from "styled-components";

type TDisplay = {
  displayType: 'result' | 'expression'
}

export const DisplayContainer = styled.div<TDisplay>`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 1rem;

  input {
    width: 100%;
    border: none;
    outline: none;
    border-radius: 1rem;
    background-color: transparent;
    font-size: ${({displayType}) => displayType === 'result' ? 3 : 4}rem;
    font-weight: 700;
    color: ${({displayType}) => displayType === 'result' ? '#A0A0A0' : '#FFFFFF'};
    text-align: end;
    text-shadow: 2px 2px 2px #000;
  }
`