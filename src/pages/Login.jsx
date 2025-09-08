import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
        const [err, setErr] = useState(false);
        const navigate = useNavigate()
        const auth = getAuth();

        const handleSubmit = async (e) => {
          e.preventDefault();

          const email = e.target[0].value;
          const password = e.target[1].value;
        
          try {
                await signInWithEmailAndPassword(auth, email, password)
                navigate("/")

        

          } catch (err) {
                    console.log(err);
                    setErr(true);

                }
        };

  return (
       <div className='bg-blue-300 h-screen flex items-center justify-center '>
   
                <div className='flex flex-col bg-white py-[20px] px-[60px] rounded-md gap-[10px] items-center'>
   
                   <h1 className='font-bold text-2xl text-blue-900'>We Talk!</h1>
                   <p className='text-blue-900 text-sm'>Register</p>
   
                        <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>

                           <input className='p-3 focus:border-b-blue-400 border-b  border-gray-300 outline-none placeholder-gray-400 placeholder:text-sm w-[18rem]' type="email" placeholder='email' />
                           <input className='p-3 focus:border-b-blue-400 border-b border-b-gray-300 outline-none placeholder-gray-400 placeholder:text-sm' type="password" placeholder='password'/>

                           <button className='bg-blue-300 p-[10px] font-medium cursor-pointer text-white rounded-md border-none'>
                                Sign In</button>
                                {err && <span className="text-red-500 text-xm">Something Went Wrong</span>}
                       </form>
                   <p className='text-sm text-blue-900'>You don't have an account? <Link to="/Register"  className="font-medium">Rigister</Link></p>
              </div>        
       </div>
  )
}

export default Login