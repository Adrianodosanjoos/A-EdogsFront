import Logo from '../../assets/logo.svg';
import { CartItems } from '../../components/CartItems';
import { Banner, Container, Content, Title } from './style';

export function Cart (){
    return(
        <Container>
            <Banner>
                <img src={Logo} alt='logo aee dogs'/>
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                <CartItems />
             {/* <CartResume /> */}
            </Content>
        </Container>
    );
}