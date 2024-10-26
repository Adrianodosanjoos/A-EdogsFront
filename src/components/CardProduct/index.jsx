import PropTypes from "prop-types";
import { Container } from "./style";
import { CardImage } from "./style";
import { CartButton } from "../CartButton";

export function CardProduct({product}) {
    console.log(product);
    return(
      
<Container>
   
       <CardImage src={product.url} alt={product.name}/>
       <div>
        <p>{product.name}</p>
        <strong>{product.price}</strong>
       </div>
       <CartButton></CartButton> 
        </Container>
    );
}

CardProduct.propTypes = {
    product: PropTypes.object,
};