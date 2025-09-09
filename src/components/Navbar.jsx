import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import Profile from '../img/imageprofile.jpg'

const Navbar = () => {
        const { currentUser} = useContext(AuthContext)
  return (
    <div className=''>
        <header className='h-[60px] flex bg-[#2f2d52] p-5 justify-between text-white items-center'>
                <h1>We Talk!</h1>
                <div className='flex items-center gap-4 justify-center'>
                        <div className='flex gap-1'>
                                <img src={currentUser.photoURL  || Profile} alt="john"  className='bg-white w-[24px] h-[24px] rounded-full object-cover' />
                                <span>{currentUser.displayName}</span>
                        </div>
                        <button className='font-medium text-sm px-2 py-2 bg-blue-500 border-none rounded cursor-pointer' onClick={()=>signOut(auth)}>Logout</button>

                </div>
        </header>
    </div>
  )
}

export default Navbar