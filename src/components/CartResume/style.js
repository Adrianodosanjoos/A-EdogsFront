import styled from "styled-components";

export const Container = styled.div `
background-color: rgba(0,0,0, 0.5);

border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-bottom: 20px;


* {
    font-family:"Road Rage", sans-serif;
    color:  #ff8c05;
}

.container-top {
    display: grid;
    grid-gap: 10px 30%;
    grid-template-areas: 
    'title title'
    'items items-price'
    'delivery-tax   delivery-tax-price';
    

    .title {
        grid-area: title;
        font-size: 45px;
        text-align: center;
        background-color: #000;
        width: 100%;
        padding: 15px;
        border-top-left-radius:20px;
        border-top-right-radius:20px ;
        
    }

    .items {
        grid-area: items;
        font-size: 28px;
        padding-left: 20px;
    }

    .items-price {
        grid-area: items-price;
        font-size: 28px;
        padding-right: 20px;
    }

    .delivery-tax {
        grid-area: delivery-tax;
        font-size: 28px;
        padding-left: 20px;
    }

    .delivery-tax-price {
        grid-area:  delivery-tax-price;
        font-size: 28px;
        padding-right: 20px;
    }
}

.container-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 40px;
    margin: 24px;
    padding: 20px;


    
* {
    
    color:  #ff0000;
}
}
`;

