// import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center font-gilroyBold'>
      <h1 className="text-[25px]">GoodDish!</h1>
      <input type="text" placeholder="Type to search" className="h-[30px] outline-none bg-[#eaeaea] rounded-2xl px-3 font-gilroyMed" />
    </div>
  )
}

export default Navbar