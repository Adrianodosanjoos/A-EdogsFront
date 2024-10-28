import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { api } from '../../services/api';
import { CategoryButton, Container, ContainerItems, Title } from './style';
import { useNavigate } from 'react-router-dom';

export function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('/categories');

            setCategories(data);

        }

        loadCategories();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1200, min: 600 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 2,
        },
    };

    return (
        <Container>
            <Title>Categorias</Title>

            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisbile={false}
                itemClass="carousel-item"
            >
                {categories.map((category) => (
                    <ContainerItems key={category.id} imageUrl={category.url}>
                        <CategoryButton

                            onClick={() => {
                                navigate({
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`,
                                });
                            }}

                        >
                            {category.name}
                        </CategoryButton>

                    </ContainerItems>
                ))}
            </Carousel>
        </Container>
    );
}