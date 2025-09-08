import React from 'react'
import SideBar from '../components/SideBar'
import Chat from '../components/Chat'

const Home = () => {
  return (
    <div className='bg-blue-300 h-screen items-center flex justify-center overflow-hidden'>
                <section className='h-screen w-screen flex'>
                        <div className='flex-[1] border-r-1 border-r-blue-900 bg-[#3e3c61]'><SideBar /></div>
                        <div className='flex-[3]'><Chat /></div>
                        
                        
                </section>

    </div>
  )
}

export default Home