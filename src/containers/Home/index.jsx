import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { OffersCarousel } from "../../components/OffersCarousel";
import { Banner, Container, Content } from "./style";

export function Home() {
    return (
        <main>
        <Banner>
            <h1>Bem-Vindo(a)!</h1>
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