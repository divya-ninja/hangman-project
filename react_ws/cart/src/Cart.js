import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products: [
                {
                    title: 'Phone',
                    price: 9999,
                    qty: 2,
                    img: '',
                    id: 1
                },
                {
                    title: 'laptop',
                    price: 99999,
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    title: 'watch',
                    price: 999,
                    qty: 4,
                    img: '',
                    id: 3
                }
            ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // this.testing();
    }

    handleIncreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
        this.setState({
            products: products
            // or simply products
        })
    }

    render(){
        const {products} = this.state;
        return(
            <div className = "cart">
                {products.map((product) => {
                    return (
                        <CartItem 
                            product = {product} 
                            key = "product.id"
                            onIncreaseQuantity = {this.handleIncreaseQuantity}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;