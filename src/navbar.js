import React from "react";
import './navbar.css';

const Navbar=(props)=>{
    return(
        <div className="navbar">
            <div style={styles.h} className="cart">
                <img className="cart_icon" src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" alt="Cart" />
                <span className="count">{props.count}</span>
            </div>
        </div>
    );
}

const styles={
    h:{
        height: 50,
        width: 50
    }
}

export default Navbar;