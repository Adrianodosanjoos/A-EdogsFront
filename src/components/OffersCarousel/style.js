import styled from "styled-components";

export const Container = styled.div `
.carousel-item {
    padding-right:40px;
}

overflow-x: hidden;

.react-multi-carousel-list {
overflow: visible;
}

padding-left: 40px;
padding-bottom: 40px;
`;

export const Title = styled.h2 `
font-size: 32px;
font-weight: 800;
color:  #ff8c05;
padding-bottom: 12px;
position: relative;
text-align: center;
margin: 70px 0;


&::after {
    content: '_';
    font-size: 3px;
    position: absolute;
    bottom: 0;
    width: 56px;
    background-color:  #ff8c05;
    left: calc(50% - 28px);
}
`;
