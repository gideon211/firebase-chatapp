import React from 'react'

const Login = () => {
  return (
       <div className='bg-blue-300 h-screen flex items-center justify-center '>
   
                <div className='flex flex-col bg-white py-[20px] px-[60px] rounded-md gap-[10px] items-center'>
   
                   <h1 className='font-bold text-2xl text-blue-900'>We Talk!</h1>
                   <p className='text-blue-900 text-sm'>Register</p>
   
                        <form className='flex flex-col gap-4 '>

                           <input className='p-3 focus:border-b-blue-400 border-b-1  border-gray-300 outline-none placeholder-gray-400 placeholder:text-sm w-[18rem]' type="email" placeholder='email' />
                           <input className='p-3 focus:border-b-blue-400 border-b-1 border-b-gray-300 outline-none placeholder-gray-400 placeholder:text-sm' type="password" placeholder='password'/>

                           <button className='bg-blue-300 p-[10px] font-medium cursor-pointer text-white rounded-md border-none'>
                                Sign In</button>
                       </form>
                   <p className='text-sm text-blue-900'>You don't have an account? Rigister</p>
              </div>        
       </div>
  )
}

export default Login