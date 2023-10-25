import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from "./cart.module.css";

// Existing imports and code

const CartScreen = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); // Define totalPrice here
  
    useEffect(() => {
      const fetchCartItems = async () => {
        try {
          const response = await axios.get('https://food-kitchen-backend-ckae.vercel.app/api/cart-list/');
          setCartItems(response.data.cart_items);
          setTotalPrice(response.data.total_price);
        } catch (error) {
          console.error('Error fetching cart items:', error);
        }
      };
  
      fetchCartItems();
    }, []);
  
    return (
        <div className={style.Cart}>
        <h1>Your Cart Items</h1>
        {cartItems.map((item) => (
          <div key={item.id} className={style['cart-item']}>
            <img src={item.food_item.image} alt={item.food_item.name} />
            <div className={style['cart-item-details']}>
              <h2>{item.food_item.name}</h2>
              <div className={style['cart-item-price']}>
                <p>Price: Rs {item.food_item.price}</p>
                {/* Remove Quantity */}
              </div>
            </div>
          </div>
        ))}
        <div className={style['cart-total-price']}>
          <p>Total Price: Rs {totalPrice}</p>
        </div>
        <div className={style['proceed-button']}>
        <button>PROCEED TO PAYMENT</button>
        </div>
        <div className={style['thanks-message']}>Thanks for Choosing My Food Kitchen</div>
      </div>
      
    );
  };
  
  export default CartScreen;
  
