import { defaultConfig } from 'next/dist/server/config-shared'
import React from 'react'
import Link from 'next/link';

const Hero = ({heading, message}) => {
    return (
        <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0  2rem bg-black/50 z-[2]'/>
            <div className='p-5 text-white z-[2] mt-[-10rem]'>
                <h2 className='text-5xl font-bold'>{heading}</h2>
                <p className='py-5 text-xl'>{message}</p>
            </div>
        </div>
    )
}

export default Hero