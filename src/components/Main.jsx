import React, { useState } from "react"
import { Link } from "react-router-dom";

const FIELDS = {
  NAME: "name",
  ROOM: "room",
}

const Main = () => {
  const { NAME, ROOM } = FIELDS;

  const [values, setValues] = useState({ [NAME]: '', [ROOM]: '' });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  }

  const handleClick = (e) => {
    const isDisabled = Object.values(values).some(value => !value);
    
    if (isDisabled) e.preventDefault();
  }

  return (
    <form className="flex flex-col p-10 bg-purple-500 rounded-xl w-96 border border-violet-700 shadow-xl">
      <h1 className="text-3xl text-center mb-7 text-zinc-100 font-semibold drop-shadow-lg">Join Room</h1>
      <input 
        type="text" 
        name="name" 
        value={values[NAME]}
        placeholder="Username" 
        className="p-3 px-5 rounded-md mb-7 w-full"
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <input 
        type="text" 
        name="room" 
        value={values[ROOM]}
        placeholder="Room" 
        className="p-3 px-5 rounded-md mb-10 w-full"
        onChange={handleChange}
        autoComplete="off" 
        required      
      />
      <Link to={`/chat?name=${values[NAME]}&room=${values[ROOM]}`} onClick={handleClick} >
        <button 
          type="submit" 
          className="p-2 w-full border-2 border-zinc-100 text-zinc-100 text-xl font-bold rounded-md transition-all duration-150 hover:text-purple-500 hover:bg-zinc-100"
        >
          Join
        </button>
      </Link>
    </form>
  )
};

export default Main;
