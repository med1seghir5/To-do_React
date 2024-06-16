import React, { useState } from 'react'

export default function Todo() {
    const [state , setState] = useState([]);
    const [input, setInput] = useState('');

    const inputchange =()=>{
      if(input.trim()){
        setInput(input);
        setState([...state ,input]);
        setInput('')
      }
        
    }

  return (
    <div className='flex flex-col justify-center items-center space-y-5 bg-[#DBE2EF] h-screen'>
        <div className='text-center text-4xl font-ubuntu font-light'> 
            To do_ APP
        </div>
        <div>
            <input type='text' value={input} className='text-black bg-[#B1B1B1] bg-opacity-40 rounded-s-xl text-center w-48' onChange={e =>setInput(e.target.value)}/>
            <input type='submit' value="+" className='bg-[#AAAA] text-[#ffff] rounded-e-3xl w-14' onClick={inputchange}/>
        </div>
      <div className='text-center space-y-2 rounded-xl font-ubuntu font-semibold bg-[#ffff] bg-opacity-80 w-64'>
        {state.map((state, index) => (
          <div key={index}>
            <input type='checkbox'/>
            {state}
          </div>
        ))}
      </div>
    </div>
  )
}
