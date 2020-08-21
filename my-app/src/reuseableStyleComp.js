import styled from 'styled-components';

export const Main = styled.div`
`;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
`;

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const BarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  border-style: solid;
  width: 470px;
  height: 263px;
`;

export const Bar = styled.div`
  background-color: rgb(208,22,65);
  width: 46px;
  height: ${props => `${props.dataHeight}px`};
`
