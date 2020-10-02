import styled from 'styled-components';

export const Main = styled.div``;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
`;

export const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-style: solid;
  height: 1000px;
  width: 1200px;
`;

export const ToolTip = styled.div`
  visibility: hidden;
  position: absolute;
  background-color: rgb(240, 248, 249);
  width: 91px;
  height: 30px;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Bar = styled.div`
  &:hover ${ToolTip} {
    visibility: visible;
    transition-delay: 0.5s;
  }
  display: flex;
  justify-content: flex-end;
  background-color: rgb(208, 22, 65);
  width: ${props => `${props.dataHeight}px`};
  height: 46px;
`;
export const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 300px;
  height: 1000px;
  border-style: solid;
`;

export const Toppings = styled.div``;

export const Text = styled.div`
  float: right;
  padding-right: 10px;
  white-space: nowrap;
  height: 40px;
`;
