import React from 'react'

export default function Gallery(){
  return (
    <section className='px-6'>
      <div className=''>
      <h1 className='font-semibold text-[#9d4edd]'>Photo Gallery</h1>
      <p className='text-base mt-1 text-white'>Explore your collection – a showcase of moments, memories, and milestones captured in vibrant detail.</p>
    </div>
    <div className='flex mt-2 gap-4'>
      <div className='w-1/3'>
        <img src="" alt="" className='h-100 bg-white'/>
      </div>
      <div className='w-1/3 flex gap-4'>
        <div className=''>
          <img src="" alt="" className='h-50 bg-white'/>
        </div>
        <div className=''>
          <img src="" alt="" className='h-50 bg-white'/>
        </div>
        <div className=''>
          <img src="" alt="" className='h-50 bg-white'/>
        </div>
      </div>
      <div className='w-1/3'>
        <img src="" alt="" className='h-100 bg-white'/>
      </div>
    </div>
    </section>

  )
}

