import styled from "styled-components";

import BannerHome from '../../assets/Banner-home.svg';
import Background from '../../assets/background.svg'




export const Banner = styled.div `
     background: url('${BannerHome}');
     background-size: cover;
     background-position: center;
     height: 480px;

     h1 {
         font-family: fantasy, sans-serif;
        font-size: 80px;
        color: #ffff;
        position: absolute;
        right: 20%;
        top: 10%;
     }
`;

export const Container = styled.section `
background: linear-gradient(
    rgba(255,255,255, 0.2),
    rgba(255,255,255, 0.5) 
),
url('${Background}');
height: 500px;
`;

export const Content = styled.div ``;