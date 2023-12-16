"use client"
import React, { useState } from 'react'
// import tailwindConfig from '@/tailwind.config'

const page = () => {
  const [Tital, setTital] = useState("")
  const [Desc, setDesc] = useState("")
  const [Maindata, setMaindata] = useState([])
  function submithandel(e) {
    e.preventDefault()
    setMaindata([...Maindata, { Tital, Desc }]);
    // console.log(Maindata)
    // else(setCount(false))
    setTital("")
    setDesc("")
  }
  let Deletetask = function (i) {
    let Taskcopy = [...Maindata]
    Taskcopy.splice(i, 1);
    setMaindata(Taskcopy)
  }
  let show = <h2 className='bold text-2xl'>List empty</h2>
  if (Maindata.length > 0) {
    show = Maindata.map((t, i) => {
      // setCount(false)
      return (

        <div key={i} className='m-5 border rounded-3xl p-5 '>
          <h2 className=' truncate'> Title : {t.Tital}</h2>
          <p className=' truncate'>Description : {t.Desc}</p>
          <button className='hover:bg-red-700 cursor-pointer bg-red-500 text-white p-2 rounded-xl mt-2' onClick={() => { Deletetask(i) }}>Delete</button>
          
        </div>
        

      )
      


    })
  }







  return (
    <>
    <div className='bg-blue-600 w-full md:w-1/3 flex-col justify-center align-middle p-5  mx-auto my-5 rounded-2xl' >
      <form onSubmit={submithandel} >
        <h1 className='text-2xl bold mb-5'>To-Do-App</h1>
        <input type="text" placeholder='Enter your task'
          value={Tital} onChange={(e) => {
            setTital(e.target.value)
          }}  className='w-[80%] mb-3 rounded-lg p-2' />
        <input type='text' placeholder='Task description'
          value={Desc} onChange={(e) => {
            setDesc(e.target.value)
          }} className='w-[80%] mb-3 mr-5 rounded-lg p-2' />


        <button className='  cursor-pointer border  hover:bg-blue-800 rounded-lg p-3 text-white'>Add</button>
      </form>
      <div>
        {show}
      </div>
      </div>
    </>
  )
}



export default page 