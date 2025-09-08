import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
        <header className='h-[60px] flex bg-[#2f2d52] p-5 justify-between text-white items-center'>
                <h1>We Talk!</h1>
                <div className='flex items-center gap-4 justify-center'>
                        <div className='flex gap-1'>
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="john" className='bg-white w-[24px] h-[24px] rounded-full object-cover' />
                                <span>john</span>
                        </div>
                        <button className='font-medium text-sm px-2 py-2 bg-blue-500 border-none rounded cursor-pointer'>Logout</button>

                </div>
        </header>
    </div>
  )
}

export default Navbar