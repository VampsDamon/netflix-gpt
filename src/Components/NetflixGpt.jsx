import React from 'react'
import GPTSearchView from './GPTSearchView'

const NetflixGpt = () => {
  return (
    <div className="relative w-screen min-h-screen  bg-login-bg bg-center bg-cover overflow-x-hidden">
      <div className="absolute inset-0  bg-gradient-to-br from-black to-black opacity-50"></div>

     <main className='relative flex justify-center top-[100px] z-10 text-white'>
       <GPTSearchView/>
     </main>
      </div>
  )
}

export default NetflixGpt