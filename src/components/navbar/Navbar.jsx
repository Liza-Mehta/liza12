import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {


  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount , token,setToken} = useContext(StoreContext);


  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }


  return (
    <div className='navbar px-0 py-[20px] flex justify-between items-center '>
      {/* Logo */}
      <Link to='/'>
        <img 
          src={assets.myCafe} 
          alt="Logo" 
          className='logo h-16 w-20 max-[1050px]:w-[140px] max-[900px]:w-[120px]' 
        />
      </Link>
      
      {/* Navbar Menu */}
      <ul className="flex list-none gap-5 text-customBlue text-lg max-[1050px]:gap-[20px] max-[1050px]:text-[17px] max-[900px]:gap-[15px] max-[900px]:text-[16px] max-[750px]:hidden"> 
        <li>
          <Link 
            to='/' 
            onClick={() => setMenu("home")} 
            className={`${menu === "home" ? "active pb-[2px] border-b-[2px] border-[#49557e]" : ""} !cursor-pointer`}
          >
            Home
          </Link>
        </li>
        <li>
          <a 
            href='#explore-menu' 
            onClick={() => setMenu("menu")} 
            className={`${menu === "menu" ? "active pb-[2px] border-b-[2px] border-[#49557e]" : ""} !cursor-pointer`}
          >
            Menu
          </a>
        </li>

        {/* <li>

        
           <a 
            href='#deals' 
            onClick={() => setMenu("deals")} 
            className={`${menu === "deals" ? "active pb-[2px] border-b-[2px] border-[#49557e]" : ""} !cursor-pointer`}
          >
            deals
          </a> 
        

        </li> */}
        
        <li>
          <a 
            href='#footer' 
            onClick={() => setMenu("contact-us")} 
            className={`${menu === "contact-us" ? "active pb-[2px] border-b-[2px] border-[#49557e]" : ""} !cursor-pointer`}
          >
          Contact us
          </a>
        </li>
      </ul>

      {/* Right Section */}
      <div className="navbar-right flex items-center gap-10 max-[1050px]:gap-[30px] max-[900px]:gap-[20px]">
        {/* Search Icon */}
        {/* <img 
          src={assets.search_icon} 
          alt="Search Icon" 
          className='w-[20px] max-[1050px]:w-[22px] max-[900px]:w-[20px]' 
        /> */}
        
        {/* Basket Icon */}
        <div className="navbar-search-icon relative">
          <Link to='/cart'>
            <img 
              src={assets.basket_icon} 
              alt="Basket Icon" 
              className='w-[20px] max-[1050px]:w-[22px] max-[900px]:w-[20px]' 
            />
          </Link>
          <div className={getTotalCartAmount()===0?"":"dot absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px]"}></div>
        </div>

          {!token?<button onClick={()=>setShowLogin(true)}
          className='bg-transparent text-base text-customBlue border-solid border-2 border-red-500 py-[7px] px-[20px] rounded-[50px] !cursor-pointer transition-[0.3s] hover:bg-[#fff4f2] max-[1050px]:py-[8px] max-[1050px]:px-[25px] max-[900px]:py-[7px] max-[900px]:px-[20px] max-[900px]:text-[15px]'
        >
          sign in
        </button>:<div className='navbar-profile'>
              <img src={assets.profile_icon} alt="/"/>
              <ul className='nav-profile-dropdown'>
                  <li onClick={()=>navigate('/myorders')}> <img src={assets.bag_icon} alt="/" /><p>Orders</p></li>
                  <hr/>
                  <li onClick={logout}><img src={assets.logout_icon} alt="/" /><p>Logout</p></li>
              </ul>
           </div>}

        {/* Sign In Button */}
        
      </div>
    </div>
  )
}

export default Navbar;
