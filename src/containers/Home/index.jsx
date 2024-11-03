import { OffersCarousel, CategoriesCarousel } from "../../components";
import { Banner, Container,  } from "./style";


export function Home() {
    return (
        <main>
        <Banner>
            <h1>Bem-<span>Vindo(a)!</span></h1>
        </Banner>
        <Container>
            <div>
                <CategoriesCarousel />
                <OffersCarousel />
            </div>
        </Container>
        </main>
    );
}