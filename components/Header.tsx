"use client"
import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avater from "react-avatar";
const Header = () => {
  return (
    <header>
        <div className='flex flex-col md:flex-row items-center p-5 bg-[#00000006]  rounded-b-2xl'>
            <div 
              className="
              absolute
              top-0
              left-0
              w-full
              h-96
              bg-gradient-to-br
              from-[#FCC8C5]
              to-[#D9D7F5]
              rounded-md
              filter
              blur-3xl
              opacity-100
              -z-50
              "
            />
            <Image src="https://links.papareact.com/c2cdd5" 
                alt="trello logo" 
                width={300} height={100} 
                className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
                />
                
            <div className='flex items-center w-full space-x-2 sm:space-x-5 flex-1 justify-end'>
                <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md
                flex-1 md:flex-initial'>
                    <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' /> 
                    <input className=' flex-1 outline-none' placeholder='Search' type="text" />
                    <button type='submit' hidden>Search</button>
                </form>
                <Avater name="Olaniran Micheal" color='#0055D1' round size='40'  />
            </div>
        </div>
        <div className='flex items-center justify-center px-5 py-2 md:py-5'>
          <p className="flex p-5 items-center text-center text-sm font-light 
            pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
            <UserCircleIcon className='inline-block h-10 w-10 text-[#0055D1] mr-1' />
            GPT is summarising your tasks for the day...
          </p>
        </div>
    </header>
  )
}

export default Header