import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/createSlice';
function CartItem({ name, price }) {
    return (
        <div className='cart-item'>
            <h1>{name}</h1>
            <h1>{price} rs</h1>
        </div>
    );
}

function Cart() {
    const [cartArray, setCartArray] = useState([]);
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    useEffect(() => {
        setCartArray(items);
    }, [items]);

    if (cartArray.length === 0) {
        return (
            <div className='next-p'>
                <h1>No items are available</h1>
            </div>
        );
    }

    const clear = () => {
        dispatch(clearCart())
    };

    return (
        <div className='next-p'>
            <div className='cart-item'>
            <button className='c-btn' onClick={clear}>Clear Cart</button>
            <div >
                <h1 >Total cost:{
                    cartArray.reduce((total,item)=>{
                        
                        return total+ item.cost
                    },0)
                    }</h1>
                <button className='c-btn'>Buy Now</button>
            </div>
            </div>
            {cartArray.map((item, index) => (
                <CartItem key={index} name={item.name} price={item.cost} />
            ))}
        </div>
    );
}

export default Cart;
