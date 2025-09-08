import React from 'react'

const Message = () => {
  return (
    <div className='flex gap-[20px]'>
        <div className="flex flex-col font-medium text-gray-500 ">
               <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-[40px] object-cover h-[40px] rounded-full' alt="" />
               <span>just now</span> 
        </div>
        
        <div className="content max-w-[80%] flex flex-col gap-[10px]">
                <p className='bg-white py-[10px] px-[20px] border-l-rounded border-l'>hello</p>
                               {/* <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-[40px] rounded-full h-[40px] bg-no-repeat object-cover' alt="" /> */}

        </div>
    </div>
  )
}

export default Message