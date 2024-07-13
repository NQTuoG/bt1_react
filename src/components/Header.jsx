import React from 'react'

const Header = () => {
  return (
    <div >
      <div className='grid grid-cols-2  text-center bg-black text-white font-bold text-2xl'>
      <h1 className=' text-center'>bài tập react 1</h1>
      <ul className='justify-center flex gap-5'>
        <li>Poke Wiki </li>
        <li>PokeDesk</li>
        <li>Battle</li>
      </ul>
      </div>

    </div>
  )
}

export default Header
