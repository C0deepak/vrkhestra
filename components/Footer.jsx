import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-4 text-white mt-8 pt-16 px-16 bg-neutral-900/90 relative'>
        <div className='flex gap-8 uppercase text-sm'>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold'>Company</p>
                <div className='flex flex-col gap-1'>
                    <p>Careers</p>
                    <p>Press</p>
                    <p>Store</p>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold'>Resources</p>
                <div className='flex flex-col gap-1'>
                    <p>Terms and services</p>
                    <p>Privacy policy</p>
                    <p>Refund policy</p>
                    <p>Site map</p>
                    <p>Our hub</p>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold'>contact</p>
                <div className='flex flex-col gap-1'>
                    <p>admin@gmail.com</p>
                </div>
            </div>
        </div>

        <div className='flex items-center justify-end gap-4 py-4 text-sm'>
            <p>Privacy & Cookies</p>
            <p>Teritories</p>
            <p>Terms of Use</p>
            <p>Third Party Notices</p>
        </div>

        <div className='absolute right-16 top-8 font-bold'>VRKHESTRA</div>
    </div>
  )
}

export default Footer