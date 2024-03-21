import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [dropmenu,setDropMenu]=useState(false)
  return (
    <nav id="header" class="fixed w-full z-30 top-0 text-black bg-white">
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      
      <div className='flex w-full justify-between '>
        <div div class="pl-1 w-[50%] ">
          <Link class="toggleColour   text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl" to="/">
            Rikit Kumar
          </Link>
        </div>
        <div class="block lg:hidden relative w-[50%]">
          <button onClick={()=>setDropMenu((prev)=>!prev)} id="nav-toggle" class="flex justify-end p-1  w-[100%]">
            <svg  class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          <div className={`${dropmenu?("w-[100%] h-[10vh] bg-gray-600 absolute visible"):("hidden")} flex flex-col sm:top-24 rounded-md text-center`}>
            <Link to={'/'}  onClick={()=>setDropMenu((prev)=>!prev)} className='text-white font-semibold mt-2'>Home</Link>
            <Link to={'/getAllData'} onClick={()=>setDropMenu((prev)=>!prev)} className='text-white font-semibold'>All Data</Link>
            <Link to={'/createData'} onClick={()=>setDropMenu((prev)=>!prev)} className='text-white font-semibold'>Create</Link>
          </div>
        </div>

        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <Link to="/getAllData" class="inline-block py-2 px-4 text-black font-bold no-underline" >All Data</Link>
            </li>
            <li class="mr-3">
              <Link class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" to="/createData">Create</Link>
            </li>
            <li class="mr-3">
              <Link class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>

      </div>
      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>

  )
}

export default Navbar