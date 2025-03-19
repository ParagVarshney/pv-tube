import React, { useEffect, useState } from 'react'
import ChatMeassage from './ChatMeassage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateNames, generateRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const chatMessages = useSelector((store) => store.chat.messages);
    const dispatch = useDispatch();
    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage({
                name: generateNames(),
                message: generateRandomMessage(),
            }))
        }, 500);
        return () => clearInterval(i);
    }, [])
    return (
        <>
            <div className="h-[500px] bg-slate-100 w-full rounded-lg border border-gray-200 overflow-y-scroll">
                <h1 className="px-8 py-2 bg-slate-100 sticky top-0 z-10 border-b border-gray-300">
                    LiveChat
                </h1>
                <div className="flex flex-col-reverse">
                    {chatMessages.map((c, index) => (
                        <ChatMeassage key={index} name={c.name} message={c.message} />
                    ))}
                </div>

            </div>
            <form onSubmit={(e)=>e.preventDefault()} className=' w-full mt-1 p-2 border border-gray-400 rounded-lg' >
                <input value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} className=' w-72 md:w-80 px-2 bg-gray-200 py-1 rounded-full focus:border-gray-400 focus:ring-gray-500 outline-none' type='text' placeholder='chat..'></input>
                <button onClick={() => {
                    dispatch(addMessage({ name: "Parag", message: liveMessage }));
                    setLiveMessage(""); // Reset input after sending
                }} className=' m-1 p-1 px-2 bg-green-200 rounded-lg'>send</button>
            </form>
        </>
    );

}

export default LiveChat
