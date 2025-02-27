import styled from "styled-components";
import BannerHamburger from '../../assets/Banner-hamburger.svg';
import Background from '../../assets/background.svg';
import { Link, } from "react-router-dom";






export const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: #f0f0f0;

background: linear-gradient(
    rgba(255,255,255, 0.05),
    rgba(255,255,255, 0.15) 
),
url('${Background}');
background-color: #000;
`;

export const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 480px;
width: 100%;
position: relative;

   background: url('${BannerHamburger}') no-repeat;
   background-color: #1f1f1f;
   background-position:center ;
   background-size: cover;

   h1 {
    font-family:"Road Rage", sans-serif;
    font-size: 80px;
    line-height: 65px;
    color: #fff;
    position: absolute;

    right: 20%;
    top: 30%;

   }

   span {
    font-family:"Road Rage", sans-serif;
    font-size: 80px;
    line-height: 65px;
    color:  #ff8c05;
    
   }

   h4 {
    display: block;
    color: #fff;
    font-size: 20px;
    margin-top: -10px;
   }
`;

export const CategoryMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 30px;









`;

export const CategoryButton  = styled(Link)`
text-decoration: none;
cursor: pointer;
background: none;
color:  ${(props) => (props. $isActiveCategory ?  '#ff0000' :   ' #ff8c05')};
font-size: 24px;
font-weight:700 ;
padding-bottom: 5px;
line-height: 20px;
border: none;
border-bottom: ${props => props. $isActiveCategory && '3px solid #ff0000'};



`;

export const ProductsContaines = styled.div`
display: grid;
grid-template-columns: repeat(3 ,1fr);
padding: 40px;
gap: 60px;
justify-content: center;
max-width: 1280px;
margin: 50px auto 0;


`;

