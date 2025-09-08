import React from "react";

const Message = ({ owner }) => {
  return (
    <div className={`flex gap-[20px] mb-3 ${owner ? "flex-row-reverse" : ""}`}>
      
      {/* avatar + timestamp */}
      <div className="flex flex-col font-medium text-gray-500 items-center">
        <img
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop"
          className="w-[40px] h-[40px] object-cover rounded-full"
          alt="avatar"
        />
        <span className="text-xs">just now</span>
      </div>

      {/* message content */}
      <div className={`max-w-[80%] flex flex-col gap-[10px] ${owner ? "items-end" : ""}`}>
        {/* text bubble */}
        <p
          className={`py-[10px] px-[20px] border-none w-fit
            ${owner 
              ? "rounded-tl-xl rounded-bl-xl rounded-br-xl bg-blue-500 text-white" 
              : "rounded-tr-xl rounded-br-xl rounded-bl-xl bg-gray-200 text-black"}
          `}
        >
          hello
        </p>

        
        <img
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=686&auto=format&fit=crop"
          alt="sent-img"
          className="w-[200px] h-auto rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Message;
