import styled from 'styled-components';

export const Main = styled.div``;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
`;

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const BarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  border-style: solid;
  height: 300px;
  width: 470px;
`;


export const ToolTip = styled.span`
  visibility: hidden;
  position: absolute;
  background-color: rgb(240, 248, 249);
  margin-left: 50px;
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
    transition-delay: .5s;
  }
  background-color: rgb(208, 22, 65);
  width: 46px;
  height: ${props => `${props.dataHeight}px`};
`;
export const LegendContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 470px;
  height: 90px;
`;


export const Toppings = styled.div`
  display: flex;
  width: 46px;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  transform: rotate(-90deg);
  padding-bottom: 20px;
`;
