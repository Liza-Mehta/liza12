import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// import dotenv from 'dotenv';



const PlaceOrder = () => {

  const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)


  const [data,setData]= useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })


  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event) => {

    event.preventDefault();
    let orderItems =[];
    
    food_list.map(item => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
      console.log(orderItems);
     })

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2, // 2 is delivery charge
    };
  
    try {
      // Step 1: Place the order and get order ID
      const response1 = await axios.post(`${url}/api/order/place`, orderData, { headers: { token } });
      console.log("responce by api/order/place",response1)
      if (response1.data.success) {

        // const { orderId, amount } = response1.data;
        const { Razorpay_orderId, mongoOrderId, amount } = response1.data; // orderId is razorpay_id
        console.log({Razorpay_orderId})
        // Step 2: Create a Razorpay payment request ( it will open gateway page)


        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID, 
          amount: amount, // Amount in paise
          currency: 'INR',
          name: 'Your Company Name',
          description: 'Order Description',
          image: 'https://example.com/your_logo.jpg',
          order_id: Razorpay_orderId, // Use the order ID returned from your backend


          handler: async (response) => {


            // Handle successful payment

            // backend jo api /place kiya uper wo kaam kar rha aur razorpay ka order 
            // create karke de rha as we have all the details razorpay ( id,sign,payid)
            // neeche wali line kaam kar rhi hai acche se
            console.log('Payment Success , handler of placeorddr ka response:', response);

            const razorpay_order_id = response.razorpay_order_id;
            const razorpay_payment_id = response.razorpay_payment_id;
            const razorpay_signature = response.razorpay_signature;



            // Optionally, send payment confirmation to your server
            await axios.post(`${url}/api/order/verify`, {
              orderId: razorpay_order_id, // Razorpay orderId
              paymentId: razorpay_payment_id,
              signature:razorpay_signature,
              mongoOrderId: mongoOrderId, // Pass the MongoDB order ID
              success:true,
            });
            alert('Payment Successful!');
          },
          prefill: {
            name: data.firstName + ' ' + data.lastName,
            email: data.email,
            contact: data.phone,
          },
          theme: {
            color: '#F37254', // Customize your theme color
          },
        };
  


        //ceates razorpay instance with options and then opens gateway to make payment,
        // if payment succeedes, handler function is called 

        const rzp = new window.Razorpay(options); //ceates razorpay instance with options
        rzp.open(); // opens gateway to make payment


      } else {
        alert("Error placing order from try");
      }
    } catch (error) {
      console.error("Error in placing order: from catch ", error);
      alert("Error in placing order from catch");
    }
  };
  
  



  
    // if token isn ot there ( not logged in ) to my orders pe na jaa pae and 
    // agar cart me total amount = 0 hai to bhi order pe na ja pe ( order mtlb patment page)
    const navigate = useNavigate();
    useEffect(()=>{
      if(!token){
        navigate('/cart')
      }
      else if(getTotalCartAmount()===0) {
        navigate('/cart');
      }
    },[token])


  return (
    <form onSubmit={placeOrder} className='place-order flex items-start justify-between gap-[50px] mt-[100px]'>
      <div className="place-order-left w-[100%] max-w-[max(30%,500px)]">
          <p className="title font-[600] text-[30px] mb-[50px]">Delivery Information</p>

          <div className="multi-fields flex gap-[10px]">
            <input required   type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First Name' className='mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[color:tomato]'/>
            <input required  type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last Name' className='mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[color:tomato]'/>
          </div>

          <input required type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email address' className='mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[color:tomato]'/>
          <input required type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' className='mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[color:tomato]'/>

          <div className="multi-fields flex gap-[10px]">
            <input required type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' className='mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[color:tomato]'/>
            <input required type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' className='mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[color:tomato]'/>
          </div>

          <div className="multi-fields flex gap-[10px]">
            <input required type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' className='mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[color:tomato]'/>
            <input required type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' className='mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[color:tomato]'/>
          </div>

          <input required type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' className='mb-[15px] w-[100%] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-[color:tomato]'/>
      </div>

      <div className="place-order-right w-[100%] max-w-[max(40%,500px)]">
      <div className="cart-total flex-1 flex flex-col gap-[20px]">
            <h2 className='text-[20px] font-[700]'>Cart Totals</h2>
            <div>
            <div className="cart-total-details flex justify-between text-[color:#555]">
                <p>Subtotal</p>
                <p>Rs {getTotalCartAmount()}</p>
              </div>
                <hr className='my-[10px] mx-[0px]'/>
              <div className="cart-total-details flex justify-between text-[color:#555]">
                <p>Delivery Fee</p>
                <p>Rs {getTotalCartAmount()===0?0:2}</p>
              </div>
                <hr className='my-[10px] mx-[0px]'/>
              <div className="cart-total-details flex justify-between text-[color:#555]">
                <b>Total</b>
                <b>Rs {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
            </div>
            <button type='submit' className='border-none text-[color:white] bg-[color:tomato] w-[max(15vw,200px)] py-[12px] px-[0px] rounded-[4px] cursor-pointer mt-[30px]'>
            
            PROCEED TO PAYMENT</button>
          </div>
      </div>
    </form>
  )

}
export default PlaceOrder
