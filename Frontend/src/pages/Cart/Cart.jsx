/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/shareContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  
  return (
    <div>
      {getTotalCartAmount() === 0 ? (
        <div className="no-order">
          <h2>No Item Selected </h2>
        </div>
      ) : (
        <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quatity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index}>
                  <div  className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p onClick={()=> removeFromCart(item._id)} className='cross'>x</p>
                  </div>
                  <hr />
                </div>

              )
            }
          })
        }
      </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount()+2}</b>
              </div>
            </div>
            <button onClick={ ()=> navigate('/order')} >Proceed To Checkout</button>
          </div>
          <div className="cart-promocode">
            <h2>Promo Code</h2>
            <div className="cart-promocode-input">
            <input type="text" placeholder="Enter Your Promo Code" />
            <button>Apply</button>
            </div>
          </div>
        </div>
    </div>
      )}
    </div>

    
  )
}

export default Cart
