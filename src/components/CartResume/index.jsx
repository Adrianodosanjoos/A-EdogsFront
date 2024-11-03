import { Button } from '../Button';
import { Container } from './style';

export function CartResume(){

    return(
        <div>
        <Container>
           <div className="container-top">
              <h2 className='title'>Resumo do Pedido</h2>
              <p className='items'>Itens</p>
              <p className='items-price'>€2,00</p>
              <p className='delivery-tax'>Taxa de Entrega</p>
              <p className='delivery-tax-price'>€2,00</p>
           </div>
           <div className="container-bottom">
            <p>Total</p>
            <p>€4,00</p>
           </div>
        </Container>
        <Button>Finalizar Pedido</Button>
        </div>
    );
}