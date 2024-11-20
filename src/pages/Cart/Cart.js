import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../Context/Storecontext'

const Cart = () => {

  const {cartItems,food_list,removeFromCart} = useContext(StoreContext)

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>

        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0)
            {
              return(
                <div className='cart-item-title cart-item-item'>
                  <p>{item.image}</p>
                </div>
              )
            }
        })}
      </div>
    </div>
  )
}

export default Cart