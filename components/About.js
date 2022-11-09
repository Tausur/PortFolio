import React from 'react'

const About = () => {
  return (
    <div className='flex justify-center'>
    <div className='md:w-2/3 md:pt-20 pt-8'>
      <h1 className='text-2xl font-mono inline-block border-b-4 border-gray-500'>Bio</h1>
      <div className='py-4'>

        <div className='flex pb-2'>
          <p className='pr-5'>2007</p>
          <p>born in Cumilla, Bangladesh (বাংলাদেশ)</p>
        </div>
        <div className='flex pb-2'>
          <p className='pr-5'>2019</p>
          <p>Started coding</p>
        </div>
        <div className='flex pb-2'>
          <p className='pr-5'>2021 to Present</p>
          <p>Working as a full stack Web developer</p>
        </div>
        <div className='flex py-3'>
          <p>I have also worked on Python, Java, C, C++, Machine Learning and DSA(Data Structures & Algorithms)</p>
        </div>

      </div>
    </div>
    </div>
  )
}

export default About
