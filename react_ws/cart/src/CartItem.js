import React from 'react';

class CartItem extends React.Component{
    render(){
        return(
            <div className = "cart-item">
                <div classsName = "left-block">
                    <img style = {styles.image}/>
                </div>
                <div className = "right-block">
                    <div style = {{fontSize: 25}}>phone</div>
                    <div style = {{color: 'grey'}}>Rs 9999</div>
                    <div style = {{color: 'grey'}}>Qty : 1</div>
                    <div className = "cart-item-actions">
                        {/* buttons */}
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