import React from 'react'

const ChatMeassage = ({name,message}) => {
  return (
    
    <div className='flex p-2 items-center'>
     <img className='h-6' alt='user-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s'></img>
     <span className='font-bold px-2'>{name}</span>
     <span>{message}</span>
    </div>
    
  )
}

export default ChatMeassage
