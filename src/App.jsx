import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [no1, setno1] = useState('')
  const [no3, setno3] = useState('')
  const [final, setfinal] = useState(0)
  const [hidden, sethidden] = useState(false)


  const handlechange = () => {
    let x = (no1 * 8.4) + (no3 * 23.2);
    setfinal(x)
    sethidden(true)
  }

  const refrancechange = () => {
    setno3("")
    setno1("")
  }
  const ok = () => {
    sethidden(false)
  }
  console.log(final)
  return (
    <>
      <div className='bg-[#D2D2D2] w-screen h-screen flex justify-center '>
        {hidden && (
          <div className='z-10 absolute w-screen h-screen bg-[#0000003f] backdrop-blur-2xl'>
            <div className=' rounded-[15px] m-auto gap-3 flex flex-col justify-center text-center sm:w-[20vw] w-[80vw] h-[20vh] bg-white'>
              <h1 className='font-semibold text-2xl'>Total</h1>
              <p className='text-xl'>{final} ₹</p>
              <button onClick={ok} className='hover:bg-[#efefef] mx-auto w-36 h-10 text-[#6C6C6C] text-2xl font-normal rounded-[30px] hover:border-none border border-[#8E8E8E]'>OK</button>
            </div>
          </div>
        )}
        <div className='sm:w-[50vw] w-[100vw] h-[70vh] bg-white m-auto rounded-[30px] drop-shadow-2xl flex justify-center items-center flex-col gap-8'>
          <div className='flex justify-end w-[80vw] sm:w-[25vw] '>
            <img src="./milk.svg" className='sm:w-[45px] w-[30px]' alt="" />
            <input value={no1} onChange={(e) => setno1(e.target.value)} id='no1' type="text" placeholder='Enter number' className=' text-2xl px-6 text-black h-12 w-[70vw] sm:w-[20vw] bg-[#E9E9E9]  rounded-[30px] drop-shadow-md' />
          </div>
          <div className='flex justify-end sm:w-[25vw] w-[80vw]'>
            <img src="./milk.svg" className='sm:w-[45px] w-[30px]' alt="" />
            <img src="./milk.svg" className='sm:w-[45px] w-[30px]' alt="" />
            <input value={no3} onChange={(e) => setno3(e.target.value)} type="text" placeholder='Enter number' className=' text-2xl px-6 text-black h-12 w-[70vw] sm:w-[20vw] bg-[#E9E9E9]  rounded-[30px] drop-shadow-md' />
          </div>

          <div className='flex sm:w-[25vw] w-[90vw] gap-8 justify-center mt-5'>
            <button onClick={refrancechange} className='hover:bg-[#efefef] w-36  h-10 text-[#6C6C6C] text-2xl font-normal rounded-[30px] hover:border-none border border-[#8E8E8E]'>Refresh</button>
            <button onClick={handlechange} className='hover:bg-[#efefef] w-36 h-10 text-[#6C6C6C] text-2xl font-normal rounded-[30px] hover:border-none border border-[#8E8E8E]'>Done</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
