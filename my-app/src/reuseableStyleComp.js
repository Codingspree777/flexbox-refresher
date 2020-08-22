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
export const LegendContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 470px;
  height: 90px;
`

export const Products = styled.div`
  display: flex;
  width: 46px;
`
export const Text = styled.div`
 display:flex;
 align-items: center;
 transform: rotate(-90deg);
 padding-bottom: 20px;
`
