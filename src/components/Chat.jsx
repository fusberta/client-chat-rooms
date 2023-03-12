import React, { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import io from 'socket.io-client'

const socket = io.connect("http://localhost:5000");

const Chat = () => {

  const { search } = useLocation();
  const [params, setParams] = useState(null);

  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search))
    setParams(searchParams)
    socket.emit('join', searchParams)
  }, [search])

  return (
    <div>
      Chat
    </div>
  )
};

export default Chat;
