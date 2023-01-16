import React from 'react';
import CartItem from './cartItem';

const Cart=(props)=>{
    const {products} = props;
    return(
        <React.Fragment>
            {products.map((product=>{
                return <CartItem 
                    product = {product} 
                    key = {product.id}
                    onIncreaseQuantity = {props.increaseQuantity}
                    onDecreaseQuantity = {props.decreaseQuantity}
                    onDelete = {props.deleteProduct}
                />
            }))}
        </React.Fragment>
    );
}

export default Cart;