import React from 'react';

class CartItem extends React.Component{
    constructor (){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
    render (){
        const {price, title, qty} = this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style = {{fontSize: 25}}>{title}</div>
                    <div style={ { color: '#777' } }>Rs {price}</div>
                    <div style={ { color: '#777' } }>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" className='action-icons' alt="increase" />
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" className='action-icons' alt="decrease" />
                        <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" className='action-icons' alt="delete" />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
    }
}

export default CartItem;