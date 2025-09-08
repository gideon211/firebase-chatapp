import React from 'react'

const Register = () => {
  return (
    <div className='bg-blue-300 h-screen flex items-center justify-center '>

        <div className='flex flex-col bg-white py-[20px] px-[60px] rounded-md gap-[10px] items-center'>

                <h1 className='font-bold text-2xl text-blue-900'>We Talk!</h1>
                <p className='text-blue-900 text-sm'>Register</p>

                <form className='flex flex-col gap-4'>
                        <input className='p-3 border-b-1 border-b-blue-300 outline-none placeholder-gray-400 placeholder:text-sm' type="text" placeholder='name' />
                        <input className='p-3 border-b-1 border-b-blue-300 outline-none placeholder-gray-400 placeholder:text-sm' type="email" placeholder='email' />
                        <input className='p-3 border-b-1 border-b-blue-300 outline-none placeholder-gray-400 placeholder:text-sm' type="password" placeholder='password'/>
                        <input type="file" id='file' style={{display:"none"}} />
                        <label htmlFor="file">
                                <img src="" alt="" />
                        </label>
                        <button className='bg-blue-300 p-[10px] font-medium cursor-pointer text-white rounded-md border-none'>Sign Up</button>
                </form>
                <p className='text-sm text-blue-900'>You don't have an account? Login</p>
        </div>        
    </div>
  )
}

export default Register