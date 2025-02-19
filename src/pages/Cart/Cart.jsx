import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

  const {cartItems,food_list,removeFromCart,getTotalCartAmount,url} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart mt-[100px]'>
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[color:grey] text-[max(1vw,12px)]">

          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
          
        </div>
        <br />
        <hr className='h-[1px] bg-[color:#e2e2e2] border-none'/>
        {food_list.map((item,index)=>{
            if(cartItems[item._id]>0){

              return (
                <div>
                  <div className='cart-items-title cart-items-item grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center  text-[max(1vw,12px)] my-[10px] mx-[0px] text-black'>
                    <img src={url+"/images/"+item.image} alt="" className='w-[50px]'/>
                    <p>{item.name}</p>
                    <p>Rs {item.price}.00</p>
                    <p>{cartItems[item._id]}</p>
                    <p>Rs {item.price*cartItems[item._id]}.00</p>
                    <p onClick={()=>removeFromCart(item._id)} className='cross cursor-pointer'>x</p>
                </div>
                <hr className='h-[1px] bg-[color:#e2e2e2] border-none'/>
                </div>
              )
            }
        })}
      </div>

        <div className="cart-bottom mt-[80px] flex justify-between gap-[max(12vw,20px)] max-[750px]:flex-col-reverse ">
          <div className="cart-total flex-1 flex flex-col gap-[20px]">
            <h2 className='text-[20px] font-[700]'>Cart Totals</h2>
            <div>
              <div className="cart-total-details flex justify-between text-[color:#555]">
                <p>Subtotal</p>
                <p>Rs {getTotalCartAmount()}.00</p>
              </div>
                <hr className='my-[10px] mx-[0px]'/>
              <div className="cart-total-details flex justify-between text-[color:#555]">
                <p>Delivery Fee</p>
                <p>Rs {getTotalCartAmount()===0?0:2}.00</p>
              </div>
                <hr className='my-[10px] mx-[0px]'/>
              <div className="cart-total-details flex justify-between text-[color:#555]">
                <b>Total</b>
                <b>Rs {getTotalCartAmount()===0?0:getTotalCartAmount()+2}.00</b>
              </div>
            </div>
            <button onClick={()=>navigate('/order')} className='border-none text-[color:white] bg-[color:tomato] w-[max(15vw,200px)] py-[12px] px-[0px] rounded-[4px] cursor-pointer'>PROCEED TO CHECKOUT</button>
          </div>

          <div className="cart-promocode flex-1 max-[750px]:justify-start">
            <div>
              <p className='text-[color:#555]'>If you have a promo code, Enter it here</p>
              <div className='cart-promocode-input mt-[10px] flex justify-between items-center bg-[color:#eaeaea] rounded-[4px]'>
                  <input type="text" placeholder='promo code' className='bg-transparent border-none outline-none pl-[10px]'/>
                  <button className='w-[max(10vw,150px)] py-[12px] px-[5px] bg-black border-none text-[color:white] rounded-[4px]'>Submit</button>
              </div>
            </div>
          </div>

        </div>

    </div>
  )
}

export default Cart
