import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 z-10 w-full flex items-center justify-between py-3 px-8 uppercase text-white bg-black/40'>
        <div className='font-bold'>VRKHESTRA</div>
        <nav className='flex items-center gap-8 font-semibold'>
            <Link href='/store'>store</Link>
            <Link href='/community'>community</Link>
            <Link href='/about'>about</Link>
            <Link href='/support'>support</Link>
        </nav>
        <div className='flex items-center gap-8 font-semibold'>
            <div className='w-10 h-10 flex items-center justify-center rounded-full border border-white'><ShoppingCart size={20}/></div>
            <div className='py-2 px-4 rounded-full border border-white'>login</div>
            <div className='py-2 px-4 rounded-full bg-red-500'>signup</div>
        </div>
    </div>
  )
}

export default Navbar