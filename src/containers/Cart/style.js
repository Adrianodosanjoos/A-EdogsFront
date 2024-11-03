import styled from "styled-components";
import Texture from '../../assets/texture.svg';
import Background from '../../assets/background.svg';

export const Container = styled.div `
width: 100%;

background: linear-gradient(
    rgba(255,255,255, 0.05),
    rgba(255,255,255, 0.15) 
),
 url('${Background}');
 background-color: #000;
min-height: 100vh;



`;

export const Banner = styled.div `
background: url('${Texture}');
background-color: #1f1f1f;
background-size: cover;
background-position: center;
display: flex;
align-items: center;
justify-content: center;
position: relative;

height: 180px;

img {
    height: 130px;
}

`;

export const Title = styled.div `

padding-bottom: 12px;
color:  #ff0000;
text-align: center;
position: relative;
font-size: 35px;
font-weight: 700;


&::after {
    position: absolute;
    left: calc(50% + -28px);
    bottom: 0;
    content: '';
    width: 76px;
    height: 4px;
    background-color: #ff0000;

}
`;

export const Content = styled.div `
display: grid;
grid-template-columns: 1fr 30%;
gap: 40px;
width: 100%;
padding: 40px;
margin: 0 auto;
`;