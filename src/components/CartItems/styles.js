import styled from "styled-components";

export const ProductImage = styled.img `
height:  80px;
width: 80px;
border-radius: 16px;
`;

export const ButtonGroup = styled.div `
display: flex;
align-items: center;
gap: 12px;
margin-top: 28px;

button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: #fff;
    border: none;
    background-color: #ff0000;
    font-size: 25px;
    transition: all 0.4s;

    &:hover {
        background-color:  #ff8c05;
    }

}
`;

export const EmptyCart = styled.p `
font-size: 20px;
text-align: center;
font-size: bold;
`;

export const TrashImage = styled.img`
height: 25px;
width: 25px;
cursor: pointer;
`;



