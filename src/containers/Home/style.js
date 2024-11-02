import styled from "styled-components";

import BannerHome from '../../assets/Banner-home.svg';
import Background from '../../assets/background.svg';





export const Banner = styled.div `
     background: url('${BannerHome}');
     background-size: cover;
     background-position: center;
     height: 480px;
     
     
   
   

     h1 {
         font-family:"Road Rage", sans-serif;
        font-size: 120px;
        color: #ffff;
        position: absolute;
        right: 20%;
        top: 10%;

        span{
            font-family:"Road Rage", sans-serif;
        font-size: 120px;
        color: #ff8c05 ;  
        }
     }
`;

export const Container = styled.section `
background: linear-gradient(
    rgba(255,255,255, 0.05),
    rgba(255,255,255, 0.15) 
),
url('${Background}' );

background-color: #000;



`;



