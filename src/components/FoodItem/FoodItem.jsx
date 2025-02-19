import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,description,price,image}) => {

    
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='food-item w-[100%] m-auto rounded-[15px] shadow-custom transition duration-300 animate-fadeIn delay-10s'>

      <div className="food-item-img-container relative ">
            <img className='food-item-image w-[100%] rounded-custom' src={url+"/images/"+image} alt="" />

            {
                // !cartItems[id] 
                // ?<img className='add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                // :<div className='food-item-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-[color:white]'>
                //     <img onClick={()=>removeFromCart(id)}  src={assets.remove_icon_red} className='w-[30px]' alt="" />
                //     <p>{cartItems[id]}</p>
                //     <img onClick={()=>addToCart(id)} src={assets.add_icon_green} className='w-[30px]' alt="" />
                // </div>



              // check karna agar koi dikkat ho to pahle ka code uper hai
                !cartItems?.[id] ? (
                  <img className='add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                ) : (
                  <div className='food-item-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-[color:white]'>
                    <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} className='w-[30px]' alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={() => addToCart(id)} src={assets.add_icon_green} className='w-[30px]' alt="" />
                  </div>
                )




            }

      </div>
      
      <div className="food-item-info p-[20px]">

        <div className="food-item-name-rating flex justify-between items-center mb-[10px]">
            <p className='text-[20px] font-[500]'>{name}</p>
            <img src={assets.rating_starts} className='w-[70px]' alt="" />
        </div>

        <p className="food-item-desc text-[color:#676767] text-[12px] ">{description}</p>
        <p className="food-item-price text-[color:tomato] text-[22px] font-[500] my-[10px] mx-[0px]">Rs {price}.00</p>

      </div>
    </div>
  )
}

export default FoodItem
