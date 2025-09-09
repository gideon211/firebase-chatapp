import React, { useEffect, useState } from 'react'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Chats = () => {
        const [chats, SetChats] = useState([])
        const {currentUser} = useContext(AuthContext)


        useEffect(()=>{
                const unsubscribe = onSnapshot(doc, (db, "userChats", currentUser.uid), (doc) => {
                        SetChats(doc.data())
                });

                return () => {
                        unsubscribe();
                }        
        }, [currentUser.uid]);

  return (
    <div>

                <div className="flex items-center gap-2 text-white cursor-pointer hover:bg-[#2f2d52] p-2">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""className='w-[50px] h-[50px] rounded-full object-cover' />
                <div>
                        <span className='font-bold'>Jane</span>
                        <p className='text-xs'>hello</p>
                </div>
        </div>
    </div>
  )
}

export default Chats