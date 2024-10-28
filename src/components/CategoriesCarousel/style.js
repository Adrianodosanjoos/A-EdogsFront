import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div `
.carousel-item {
    padding-right:40px;
}

padding-left: 40px;
`;

export const Title = styled.h2 `
font-size: 32px;
font-weight: 800;
color:   #ff0000;
padding-bottom: 12px;
position: relative;
text-align: center;
margin-bottom: 40px;
margin-top: 20px;


&::after {
    content: '_';
    font-size: 3px;
    position: absolute;
    bottom: 0;
    width: 56px;
    background-color:  #ff0000;
    left: calc(50% - 28px);
}
`;

export const ContainerItems = styled.div `
background: url('${(props) => props.imageUrl}');
background-position: center;
background-size: cover;
border-radius: 20px;
cursor: grab;

display: flex;
align-items: center;
padding: 20px 10px;
width: 100%;
height: 250px;


`;

export const CategoryButton = styled(Link)`
  color: #fff;
    background-color: rgba(0,0,0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: 500;
    margin-top: 140px;
    text-decoration: none;

    &:hover{
        background-color: #ff0000 ;
        font-weight: 600;
    }
`;