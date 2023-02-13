import React from 'react';
import Cart from './cart';
import Navbar from './Navbar';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      products:[
        {
          price:2990,
          title:'Watch',
          qty:1,
          img:'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80',
          id:1
        },
        {
          price:89000,
          title:'Mobile Phone',
          qty:10,
          img:'https://img6.gadgetsnow.com/gd/images/products/additional/large/G390864_View_1/mobiles/smartphones/apple-iphone-14-pro-max-512-gb-deep-purple-6-gb-ram-.jpg',
          id:2
        },
        {
          price:120000,
          title:'Laptop',
          qty:4,
          img:'https://img2.gadgetsnow.com/gd/images/products/additional/large/G338944_View_1/computer-laptop/laptops/asus-vivobook-flip-14-x415ka-bv121ws-intel-pentium-silver-n6000-14-inches-notebook-laptop-8gb-256gb-ssd-windows-11-transparent-silver-1-5-kg-.jpg',
          id:3
        }
      ]
    }
  }
    handleIncreaseQuantity=(product)=>{
      console.log('Heyy please inc the qty of ',product);
      const{ products}=this.state;
      const index=products.indexOf(product);
      products[index].qty+=1;
      this.setState({
        products
      })
    }
    
    handleDecreaseQuantity = (product) => {
      console.log('Heyy please dec the qty of ',product);
      const{ products}=this.state;
      const index=products.indexOf(product);
      if(products[index].qty==0){
        return;
      }
      products[index].qty-=1;
      this.setState({
        products
      })
    }
    handleDeleteProduct= (id) =>{
      const {products}=this.state;
      const items=products.filter((item)=>item.id !==id);
      this.setState({
        products:items
      })
    }
    getCartCount=()=>{
      const {products}=this.state;
      let count=0;
      products.forEach((product)=>{
        count+= product.qty;
      })
      return count;
    }
    getCartTotal=() =>{
      const{products}=this.state;
      let cartTotal=0;
      products.map((product)=>{
        cartTotal=cartTotal+product.qty*product.price
      })
      return cartTotal;
    }
    render () {
      const { products } = this.state;
      return (
        <div className="App">
          <Navbar count={this.getCartCount()} />
          <Cart
            products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
          />
          <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
        </div>
      );
    }
  }
  


export default App;
