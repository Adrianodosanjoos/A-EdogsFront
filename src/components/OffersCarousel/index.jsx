import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import  { api } from '../../services/api';
import { Container,  Title } from './style';
import { CardProduct } from '../CardProduct';

export function OffersCarousel() {

       const [offers, setOffers] = useState([]);

       useEffect(() => {
        
        async function loadProducts() {
            const { data } = await api.get('/products');
            
            const onlyOffers = data.filter(product => product.offer);

            setOffers(onlyOffers);
           
        }
         
        loadProducts();
       }, []);
          
       const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000},
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1200},
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1200, min: 600},
            items: 3,
        },
        mobile: {
            breakpoint: { max: 600, min: 0},
            items: 2,
        },
       };

    return (
        <Container>
            <Title>Ofertas do Dia</Title>

           { <Carousel
            responsive={responsive}
            infinite={true}
            partialVisbile={false}
            itemClass="carousel-item"
            >
             {offers.map((product) =>(
               <CardProduct key={product.id} product={product}/>
                ) )}
            </Carousel>}
        </Container>
    );
}