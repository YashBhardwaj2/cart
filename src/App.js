import './App.css';
import Navbar from './navbar';
import Cart from './Cart';
import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      products:[],
      loading:true
    }
    this.db = firebase.firestore();
  }
  componentDidMount(){
    this.db
      .collection('products')
      //.where('price','==',999)
      .orderBy('price','desc')
      .onSnapshot((snapshot)=>{
          const products = snapshot.docs.map((doc)=>{
          var data = doc.data();
          data['id']=doc.id;
          return data;
        })
        this.setState({
          loading: false,
          products:products,
        }); 
      })
  }
  handleIncreaseQuantity = (product)=>{
    const {products} = this.state;
    const index = products.indexOf(product);
    // products[index].qty+=1;
    // this.setState({
    //     products
    // });
    const docRef = this.db.collection('products').doc(products[index].id)
    docRef.update({
      qty:products[index].qty+1
    })
    .then(()=>{
      console.log('Updated successfully');
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  handleDecreaseQuantity = (product)=>{
    const {products} = this.state;
    const index = products.indexOf(product);
    // if(products[index].qty>0){
    //   products[index].qty-=1;
    //   this.setState({
    //       products
    //   });
    // }
    if(products[index].qty>0){
      const docRef = this.db.collection('products').doc(products[index].id);
      docRef.update({
        qty: products[index].qty-1
      })
      .then(()=>{
        console.log('Value updated');
      })
      .catch((error)=>{
        console.log(error);
      });
    }

  }
  handleDelete = (id)=>{
    // const {products} = this.state;
    // const items = products.filter((item)=>item.id===id);
    // this.setState({
    //     products:items
    // });
    const docRef = this.db.collection('products').doc(id);
    docRef.delete()
    .then(()=>{
      console.log('Item successfully deleted');
    })
  }
  getCount=()=>{
    const {products}=this.state;
    let count=0;
    products.forEach((element)=>{
      count+=element.qty;
    })
    return count;
  }
  getTotal=()=>{
    const {products}=this.state;
    let total=0;
    products.forEach((element)=>{
      total=total+(element.qty*element.price)
    })
    return total;
  }
  addProduct=()=>{
    this.db
      .collection('products')
      .add({
        img:'',
        price: 900,
        qty: 3,
        title: 'Washing Machine'
      })
      .then((docRef)=>{
        console.log('Product has been added',docRef);
      })
  }
  render(){
    const {products} = this.state;
    console.log(this);
    return (
      <div className="App">
        <Navbar 
          count = {this.getCount()}
        />
        
        <Cart
          products = {products}
          increaseQuantity = {this.handleIncreaseQuantity}
          decreaseQuantity = {this.handleDecreaseQuantity}
          deleteProduct = {this.handleDelete}
        />
        <button onClick={this.addProduct}>Add Product</button>
        {this.state.loading && <h1>Loading .....</h1>}
        <div style={ {padding: 10, fontSize: 20} }>
          TOTAL: {this.getTotal()} 
        </div>
      </div>
    );
    
  }
}

export default App;