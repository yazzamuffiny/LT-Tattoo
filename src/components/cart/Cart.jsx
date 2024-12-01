import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import { FaRegTrashAlt } from "react-icons/fa";

const Cart = () => {
    const { cart, updateCart, removeFromCart } = useContext(CartContext);
  
    const getTotalAmount = () => {
      return cart.reduce((total, item) => {
    
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(item.price_html, 'text/html');
        const priceString = htmlDoc.body.textContent || htmlDoc.body.innerText;
    
        const itemPrice = parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
    
        if (isNaN(itemPrice)) {
          console.error(`Invalid price format for item ${item.name}:`, item.price_html);
          return total; 
        }
    
        return total + itemPrice * item.quantity;
      }, 0).toFixed(2);
    };
  
    const handleIncrement = (item) => {
      updateCart(item.id, item.quantity + 1);
    };
  
    const handleDecrement = (item) => {
      if (item.quantity > 1) {
        updateCart(item.id, item.quantity - 1);
      } else {
        removeFromCart(item.id);
      }
    };
  
    return (
      <div className='cart-container'>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p className='cart-item'>No Items</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li className='cart-card' key={item.id}>
                <div className='cart-img'>
                    <img src={item.images[0].src} alt={item.name} />
                </div>
                <div className='cart-info'>
                    <div className='cart-info-top'>
                        <h3 className='cart-item'>{item.name}</h3>
                        <p className='cart-quantity'>Quantity: {item.quantity}</p>
                    </div>
                    <div className='cart-info-bottom'>
                        <div className='cart-price' dangerouslySetInnerHTML={{ __html: item.price_html}}/>
                        <div className='button-div'>
                          <button className='primary' onClick={() => handleDecrement(item)}>-</button>
                          <button className='primary' onClick={() => handleIncrement(item)}>+</button>
                          <button className='primary' onClick={() => removeFromCart(item.id)}><FaRegTrashAlt /></button>
                        </div>
                        
                    </div>
                </div>
              </li>
            ))}
          </ul>
        )}
  
        {cart.length > 0 && (
          <div className="cart-total">
            <h3>Total: ${getTotalAmount()}</h3>
          </div>
        )}
        <button className='primary checkout'>Proceed to Checkout</button>
      </div>
    );
  };

export default Cart
