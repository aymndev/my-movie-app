import React from 'react'
import CardMovie from '../components/CardMovie'

export default function home() {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center text-xl pt-5 '>
        <h1>Popular Movies </h1>

      </div>
      <div>
        <CardMovie/>

      </div>
     

    </div>
  )
}
