import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer text-[color:#d9d9d9] bg-[color:#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[100px] overflow-hidden' id='footer'>
      <div className="footer-content w-[100%] grid grid-cols-custom gap-[80px] max-[750px]:flex max-[750px]:flex-col max-[750px]:gap-[35px]">

        <div className="footer-content-left flex flex-col items-start gap-20px">
            <img src={assets.myCafe} className="w-[60px]" alt="" />
            <p className='mt-[8px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <div className="footer-social-icons flex flex-row mt-[14px]">

                <img src={assets.facebook_icon} alt=""  className='w-[40px] mr-[15px] cursor-pointer'/>
                <img src={assets.twitter_icon} alt="" className='w-[40px] mr-[15px] cursor-pointer'/>
                <img src={assets.linkedin_icon} alt="" className='w-[40px] mr-[15px] cursor-pointer'/>

            </div>
        </div>

        <div className="footer-content-center flex flex-col items-start gap-20px">
            <h2 className='text-[color:white] text-[18px] font-[600]'>COMPANY</h2>
            <ul>
                <li className='mb-[10px] mt-[8px] cursor-pointer'>Home</li>
                <li className='mb-[10px] cursor-pointer'>About us</li>
                <li className='mb-[10px] cursor-pointer'>Delivery</li>
                <li className='mb-[10px] cursor-pointer'>Privacy policy</li>
            </ul>
        </div>

        <div className="footer-content-right flex flex-col items-start gap-20px">
            <h2 className='text-[color:white] text-[18px] font-[600]'>GET IN TOUCH</h2>
            <ul>
                <li className='mb-[10px] mt-[8px] cursor-pointer'>78951542655</li>
                <li className='mb-[10px] cursor-pointer'>myCafe@gmail.com</li>
            </ul>
        </div>

      </div>
      <hr className='w-[100%] h-[2px] my-[20px] mx-[0px] bg-[color:grey] border-none'/>
      <p className="footer-copyright max-[750px]:text-center">
        Copyright 2024 @ MyCafe.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
