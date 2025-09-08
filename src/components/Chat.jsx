import React from 'react'
import Cam from "../img/cam.png"
import Add from "../img/add.png"
import More from "../img/more.png"
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div>
        <div className='h-[60px] flex items-center bg-[#5d5b8d] justify-between p-5 text-gray-200'>
                <span>Jane</span>
                <div className='flex gap-[10px] cursor-pointer'>
                        <img src={Cam} className='h-[24px] cursor-pointer' alt="" />
                        <img src={Add} className='h-[24px] cursor-pointer'  alt="" />
                        <img src={More} className='h-[24px] cursor-pointer'  alt="" />
                </div>
                
        </div>

        <Messages />
        <Input />
    </div>
  )
}

export default Chat