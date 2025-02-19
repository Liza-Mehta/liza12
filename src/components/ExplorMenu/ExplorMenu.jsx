import React from 'react'
import  { menu_list } from '../../assets/assets'
const ExplorMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu flex flex-col gap-[20px] max-[1050px]:max-w-[100%] max-[1050px]:text-[14px]' id='explore-menu'>
      <h1 className='text-[color:#262626] text-2xl font-[500]'>Explore our menu</h1>

      <p className="explore-menu-text max-w-[80%] text-[color:#808080]">Indulge in a diverse menu offering a mouthwatering selection of dishes, expertly crafted from the finest ingredients. 
      Our mission is to delight your taste buds and elevate your dining experience, serving up unforgettable meals with every bite.</p>

      <div className="explore-menu-list flex items-center justify-center gap-[30px] my-5 mx-0 overflow-x-scroll no-scrollbar">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img
                            src={item.menu_image}
                            alt=""
                            className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition duration-200 ${category === item.menu_name ? 'active border-4 border-[color:tomato] p-1' : ""}`}
                    />
                    
                    <p className='mt-[10px] ml-[22px] text-[color:#747474] text-responsive cursor-pointer'>{item.menu_name}</p>
                </div>
            )
        }
        )}
      </div>
        <hr className='my-[10px] mx-[0px] h-[2px] bg-[color:#e2e2e2] border-0'/>
    </div>
  )
}

export default ExplorMenu
