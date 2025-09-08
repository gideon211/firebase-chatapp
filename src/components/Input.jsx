import React from 'react'
import Img from "../img/img.png"
import Attach from "../img/attach.png"

const Input = () => {
  return (
    <div className='h-[50px] bg-white p-[10px] flex items-center justify-between w-full'>
        <div className='flex-1'>
                <input type="text" placeholder='Type something..' className='w-[100%] border-none outline-none text-md placeholder:text-gray-70' />
        </div>
        <div className='flex items-center gap-[10px]'>
                <img src={Attach} alt="" className='h-[24px] cursor-pointer'  />
                <input type='file' style={{display:"none"}} id='file' className='cursor-pointer' />
                <label htmlFor="file">
                        <img src={Img} alt="" className='h-[24px] cursor-pointer' />
                </label>
                <button className='border-none py-[10px] px-[15px] text-white bg-[#8da4f1]'>Send</button>
        </div>
    </div>
  )
}

export default Input