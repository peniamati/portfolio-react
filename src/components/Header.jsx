import React from 'react'

function Header() {
  return (
    <div className='p-5 bg-primary flex justify-between sticky top-0 w-full z-[100]'>
      <h1 className='text-secondary text-4xl font-semibold mr-4'>P</h1>
      <h1 className='text-tertiary text-4xl font-semibold'>M</h1>
    </div>
  )
}

export default Header
