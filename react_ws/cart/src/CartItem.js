import React from 'react';

class CartItem extends React.Component{
    

    // testing(){
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })

    //     promise.then(() => {
    //         // setState acts like a synchronous call
    //         this.setState({qty: 100});
    //         console.log('state', this.state);
    //     })

    // }

    increaseQuantity = () => {
        //this.state.qty += 1;
        //console.log('this', this.state);
        // setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // });
        
        // setState form 2 - use this if previous state is required
        this.setState((prevState) => {
            return{
                qty: prevState.qty + 1
            }
        }, () => {
            console.log('state', this.state);
        });
    }

    decreaseQuantity = () => {
        const {qty} = this.state;

        if(qty === 0){
            return;
        }

        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
    }

    render(){
        console.log('this.props', this.props);
        const {title, price, qty} = this.props.product;
        return(
            <div className = "cart-item">
                <div className = "left-block">
                    <img alt = "" style = {styles.image}/>
                </div>
                <div className = "right-block">
                    <div style = {{fontSize: 25}}> {title} </div>
                    <div style = {{color: 'grey'}}>Rs {price}</div>
                    <div style = {{color: 'grey'}}>Qty : {qty}</div>
                    <div className = "cart-item-actions">
                        {/* buttons */}
                        <img 
                            alt = "increase" 
                            className = "action-icons" 
                            src = "https://image.flaticon.com/icons/png/512/992/992651.png"
                            onClick = {this.increaseQuantity}
                        />
                        <img 
                            alt = "decrease" 
                            className = "action-icons" 
                            src = "https://image.flaticon.com/icons/png/512/992/992683.png"
                            onClick = {this.decreaseQuantity}
                        />
                        <img 
                            alt = "delete" 
                            className = "action-icons" 
                            src = "https://image.flaticon.com/icons/png/512/1214/1214428.png"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;

const styles = {
    image : {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: 'lightGrey'
    }
}