import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { Banner, Container, Content } from "./style";

export function Home() {
    return (
        <main>
        <Banner>
            <h1>Bem-Vindo(a)!</h1>
        </Banner>
        <Container>
            <Content>
                <CategoriesCarousel />
                <div>Carrossel Produtos</div>
            </Content>
        </Container>
        </main>
    );
}