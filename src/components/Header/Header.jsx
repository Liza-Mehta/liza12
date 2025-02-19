import React from 'react'

const Header = () => {
  return (
    <>

      <div className='header h-[34vw] my-[34px] mx-auto relative bg-[url("./assets/header_img.png")] bg-no-repeat bg-[size:100%_100%] mt-[10px] max-[750px]:h-[218px] z-[-1]'>
        <div className="header-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] text-black animate-fadeIn delay-10s hover:animate-bounce  max-[1050px]:m-w-[45%] max-[750px]:m-w-[65%]">
            <h2 className="text-[36px] font-bold max-[750px]:text-[13px] max-[750px]:mb-2">Order your favourite here</h2>
            <p className="text-lg sm:hidden lg:inline-block max-[750px]:hidden">
              Indulge in a diverse menu offering a mouthwatering selection of dishes, expertly crafted from the finest ingredients. 
              Our mission is to delight your taste buds and elevate your dining experience, serving up unforgettable meals with every bite.
            </p>
            <button className="bg-[#49557e] text-white py-2 px-6 rounded hover:bg-[#3b446a]  max-[750px]:py-[2vw] max-[750px]:px-[4vw]">View Menu</button>
        </div>
      </div>

    </>
  )
}


export default Header
