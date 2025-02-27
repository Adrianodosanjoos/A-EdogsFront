import { Link as ReactLink } from 'react-router-dom'
import styled from "styled-components";


import BackgroundLogin from "../../assets/bg 1.svg"
import Background from "../../assets/background.svg"

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
`;

export const LeftContainner = styled.div`
    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 90%;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 50%;

    background: url('${Background}');
    background-color: #1e1e1e;


    p {
    color: #FFF;
    font-size: 18px;
    font-weight: 800;
  
  
}

`;

export const Title = styled.h2`
 font-family:"Road Rage", sans-serif;
 font-weight: 500;
  font-size: 70px;
   color: #ffa300 ;
    
    
    



`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   gap: 20px;
   padding: 20px;
   width: 100%;
   max-width: 400px;
`;

export const InputContainner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input {
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
    }

    label {
        font-size: 18px;
        font-weight: 600px;
        color: #fff;
    }
     
    p {
        font-size: 14px;
        line-height: 80%;
        font-weight: 600;
        height: 10px;
        
    }

`;

export const Link = styled(ReactLink)`
text-decoration: none;
color: #fff;

&:hover{
        color: #ffa300  ;
       
    }
`;
