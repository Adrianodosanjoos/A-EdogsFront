import styled from "styled-components";

export const Root = styled.table `
width: 100%;
border-collapse:collapse;
background-color: rgba(0,0,0, 0.5);
border-radius: 20px;
font-family:"Road Rage", sans-serif;


`;

export const Header = styled.thead ``;

export const Tr = styled.tr ``;

export const Th = styled.th `
padding: 16px;
text-align: left;
color:  #ff8c05;
border-bottom: 1px solid #fff ;
background-color:  #000  ;
font-family:"Road Rage", sans-serif;
font-size: 30px;
border-bottom: 1px solid #cdcdcd;


border-top-left-radius:20px;
border-top-right-radius:20px;

`;

export const Td = styled.td `
padding: 16px;
color:  #ff8c05; 
font-weight: 500;
line-height: 115%;
font-family:"Road Rage", sans-serif;
font-size: 25px;
`;

export const Body = styled.tbody `

`;