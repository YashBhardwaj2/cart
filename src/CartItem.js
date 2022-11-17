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
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    //arrow function to bind
    increaseQuantity=()=>{
        // this.state.qty+=1;
        // console.log(this.state.qty);
        //set state 1st way
        // this.setState({
        //     qty: this.state.qty+=1
        // });
        //set state 2nd way
        this.setState((prevState)=>{
            return{ 
                qty: prevState.qty+=1
            }
        });
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
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                            className='action-icons' 
                            alt="increase" 
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                            className='action-icons' 
                            alt="decrease" 
                        />
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                            className='action-icons' 
                            alt="delete" 
                        />
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