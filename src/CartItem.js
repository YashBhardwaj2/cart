import React from 'react';
import './cartItem.css';

const CartItem = (props)=>{
    const {price,title,qty}=props.product;
    const {
        product,
        onDecreaseQuantity,
        onIncreaseQuantity,
        onDelete
    } = props;
    return(
        <div className='cart_item'>
            <div className='left'>
                <img style={styles.image} src={product.img} />
            </div>
            <div className='right'>
                <div className='specifications'>
                    <p> <h4>{title}</h4> </p>
                    <p> <h4 style={styles.f}>{price}</h4> </p>
                    <p> <h4 style={styles.f}>Qty:{qty}</h4></p>
                </div>
                <p className='horizontal_list'>
                    <ul>
                        <img 
                            className='actions' 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                            alt="plus" 
                            onClick={()=>onIncreaseQuantity(product)}
                        />
                    </ul>
                    <ul>
                        <img className='actions' src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="minus" 
                        onClick={()=>onDecreaseQuantity(product)} />
                    </ul>
                    <ul>
                        <img className='actions' src="https://cdn-icons-png.flaticon.com/512/2907/2907762.png" alt="delete" 
                        onClick={()=>onDelete(product.id)} />
                    </ul>
                </p>
            </div>
        </div>
    );
}

const styles={
    f:{
        color: "#777"
    }
}

export default CartItem;