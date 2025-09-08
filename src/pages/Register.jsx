import React from 'react'
import Add from "../img/addAvatar.png"

const Register = () => {
  return (
    <div className='bg-blue-300 h-screen flex items-center justify-center '>

        <div className='flex flex-col bg-white py-[20px] px-[60px] rounded-md gap-[10px] items-center'>

                <h1 className='font-bold text-2xl text-blue-900'>We Talk!</h1>
                <p className='text-blue-900 text-sm'>Register</p>

                <form className='flex flex-col gap-4 '>
                        <input className='p-3 border-b-1 focus:border-b-blue-400 border-b-gray-300 outline-none placeholder-gray-400 placeholder:text-sm w-[18rem]' type="text" placeholder='name' />
                        <input className='p-3 focus:border-b-blue-400 border-b-1  border-gray-300 outline-none placeholder-gray-400 placeholder:text-sm' type="email" placeholder='email' />
                        <input className='p-3 focus:border-b-blue-400 border-b-1 border-b-gray-300 outline-none placeholder-gray-400 placeholder:text-sm' type="password" placeholder='password'/>
                        <input type="file" id='file' style={{display:"none"}} />
                        <label htmlFor="file" className='flex items-center gap-[10px] text-blue-900 cursor-pointer'>
                                <img src={Add} alt="" className='w-[30px]' />
                                <span className='text-sm'>Add Avatar</span>
                        </label>
                        <button className='bg-blue-300 p-[10px] font-medium cursor-pointer text-white rounded-md border-none'>Sign Up</button>
                </form>
                <p className='text-sm text-blue-900'>You don't have an account? Login</p>
        </div>        
    </div>
  )
}

export default Register