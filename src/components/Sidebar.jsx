import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const SideBar = () => {
  return (
       <>
                <div> <Navbar /> </div>
                <div><Search /></div>
                <div><Chats /></div>
       </>
  )
}

export default SideBar