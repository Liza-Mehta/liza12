// import React, {  useContext, useState } from 'react'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../context/StoreContext';
// import axios from 'axios';

// const LoginPopup = ({setShowLogin}) => {


//   const {url,setToken} = useContext(StoreContext)

//     const [currState,setCurrState] = useState("Login");

//     const [data,setData] = useState({
//       name:"",
//       email:"",
//       password:"",

//     });

//     const onChangeHandler = (event)=>{
//       const name = event.target.name
//       const value = event.target.value;

//       setData(data=>({...data,[name]:value}))
//     }

//       // const onLogin = async(event)=>{
//       //   event.preventDefault();

//       //   // make api call

//       //   let newUrl = url;
//       //   if(currState==='Login'){
//       //     newUrl += '/api/user/login'
//       //   }else{
//       //     newUrl += '/api/user/register';
//       //   }

        
//       //   const response = await axios.post(newUrl,data);
//       //   if(response.data.success){
//       //       setToken(response.data.token);
//       //       localStorage.setItem("token",response.data.token);
//       //       setShowLogin(false);
//       //   }
//       //   else{
//       //     alert(response.data.message);
//       //   }
//       // }


//       // ye new onlogin delets token after  

//       const onLogin = async (event) => {
//         event.preventDefault();
      
//         let newUrl = url;
//         if (currState === 'Login') {
//           newUrl += '/api/user/login';
//         } else {
//           newUrl += '/api/user/register';
//         }
      
//         const response = await axios.post(newUrl, data);
//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem("token", response.data.token);
      
//           // Clear the token after 10 minutes
//           setTimeout(() => {
//             setToken("");
//             localStorage.removeItem("token");
//           }, 600000); //   600(10 min me toal seconds),000(miliseconds)           total 10 min baad token expire
      
//           setShowLogin(false);
//         } else {
//           alert(response.data.message);
//         }
//       };
      
//   return (
//     <div className='login-popup absolute z-4 w-[100%] h-[100%] bg-[color:#00000090] grid'>
//       <form onSubmit={onLogin} action="" className="login-popup-container place-self-center w-[max(23vw,330px)] text-[color:#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px]  animate-fadeIn ">

//         <div className="login-popup-title flex justify-between items-center text-[color:black]">
//             <h2 className='text-[18px] font-[600]'>{currState}</h2>
//             <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" className='w-[16px] cursor-pointer'/>
//         </div>

//         <div className="login-popup-inputs flex flex-col gap-[20px ">
//             {currState === "Login" ? (
//             <></>
//             ) : (
//             <input
//                 name='name'
//                 onChange={onChangeHandler}
//                 value={data.name}

//                 type="text"
//                 placeholder="Your name"
//                 required
//                 className="p-[10px] rounded-[4px] border border-[#c9c9c9] outline-none mt-[6px]"
//             />
//             )}

//             <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required className='p-[10px] rounded-[4px] border border-[#c9c9c9] outline-none mt-[6px]'/>
//             <input name='phone' type='number' placeholder='Mobile number' className='p-[10px] rounded-[4px] border border-[#c9c9c9] outline-none mt-[6px]'></input>
//             <input name='password' onChange={onChangeHandler} value = {data.password} type="password" placeholder='Password' required className='p-[10px] rounded-[4px] border border-[#c9c9c9] outline-none mt-[6px]'/>
//             <input name='cpassword' onChange={onChangeHandler} value = {data.cpassword} type="password" placeholder='confirm Password' required className='p-[10px] rounded-[4px] border border-[#c9c9c9] outline-none mt-[6px]'/>

//         </div>

//         <button type='submit' className='border-none p-[10px] rounded-[10px] text-[color:white] bg-[color:tomato] text-[15px] cursor-pointer'>{currState==="Sign Up"?"Create account":"Login"}</button>

//         <div className="login-popup-condition flex items-start gap-[8px] mt-[-15px]">
//             <input type="checkbox" required className='mt-[5px]'/>
//             <p>By continuing, i agree of the terms of use & privacy policy.</p>
//         </div>

//         {currState==="Login"
//         ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")} className='text-[color:tomato] font-[500] cursor-pointer'>Click here</span></p>
//         :<p>Already have an account? <span onClick={()=>setCurrState("Login")} className='text-[color:tomato] font-[500] cursor-pointer'>Login here</span></p>
//         }
//       </form>
//     </div>
//   )
// }

// export default LoginPopup







import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState('Login'); // "Login" or "Sign Up"

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
    phone: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();

    let newUrl = url;
    if (currState === 'Login') {
      newUrl += '/api/user/login';
    } else {
      newUrl += '/api/user/register';
    }

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);

      // Clear the token after 10 minutes
      setTimeout(() => {
        setToken('');
        localStorage.removeItem('token');
      }, 600000); // 10 minutes

      setShowLogin(false);
    } else {
      alert(response.data.message);
      // Clear form fields when there's an error
    setData({
      name: '',
      email: '',
      password: '',
      cpassword: '',
      phone: ''
    });
    }
  };

  return (
    <div className='login-popup absolute z-4 w-[100%] h-[100%] bg-[color:#00000090] grid'>
      <form
        onSubmit={onLogin}
        className='login-popup-container place-self-center w-[max(23vw,330px)] text-[color:#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px] animate-fadeIn'
      >
        <div className='login-popup-title flex justify-between items-center text-[color:black]'>
          <h2 className='text-[18px] font-[600]'>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=''
            className='w-[16px] cursor-pointer'
          />
        </div>

        <div className='login-popup-inputs flex flex-col gap-[20px]'>
          {/* Name field (only visible for Sign Up) */}
          {currState === 'Sign Up' && (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type='text'
              placeholder='Your name'
              required
              className='p-[10px] rounded-[4px] border border-[#c9c9c9] outline-none mt-[6px]'
            />
          )}

          {/* Email field (visible for both Login and Sign Up) */}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type='email'
            placeholder='Your email'
            required
            className='p-[10px] rounded-[4px] border border-[#c9c9c9] outline-none mt-[6px]'
          />

          {/* Password field (visible for both Login and Sign Up) */}
          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type='password'
            placeholder='Password'
            required
            className='p-[10px] rounded-[4px] border border-[#c9c9c9] outline-none mt-[6px]'
          />

          {/* Confirm password and phone (only visible for Sign Up) */}
          {currState === 'Sign Up' && (
            <>
              <input
                name='cpassword'
                onChange={onChangeHandler}
                value={data.cpassword}
                type='password'
                placeholder='Confirm Password'
                required
                className='p-[10px] rounded-[4px] border border-[#c9c9c9] outline-none mt-[6px]'
              />
              <input
                name='phone'
                onChange={onChangeHandler}
                value={data.phone}
                type='text'
                placeholder='Mobile number'
                required
                className='p-[10px] rounded-[4px] border border-[#c9c9c9] outline-none mt-[6px]'
              />
            </>
          )}
        </div>

        <button
          type='submit'
          className='border-none p-[10px] rounded-[10px] text-[color:white] bg-[color:tomato] text-[15px] cursor-pointer'
        >
          {currState === 'Sign Up' ? 'Create account' : 'Login'}
        </button>

        <div className='login-popup-condition flex items-start gap-[8px] mt-[-15px]'>
          <input type='checkbox' required className='mt-[5px]' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === 'Login' ? (
          <p>
            Create a new account?{' '}
            <span
              onClick={() => setCurrState('Sign Up')}
              className='text-[color:tomato] font-[500] cursor-pointer'
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span
              onClick={() => setCurrState('Login')}
              className='text-[color:tomato] font-[500] cursor-pointer'
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;















