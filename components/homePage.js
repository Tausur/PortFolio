import React from 'react'
import About from './About'
import { AiFillHeart } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import Link from 'next/link'
import {CgWebsite} from 'react-icons/cg'

const HomePage = (theme) => {

  let styles = {
    'bio': 'text-lg px-7 py-3 inline-flex rounded-md justify-center mx-7',
    'darkBioCol': { 'background': 'rgb(49 49 52)' },
    'whiteBioCol': { 'background': 'white' },
    'darkCol': { 'background': 'rgb(32 32 35)' },
    'whiteCol': { 'background': '#f0e7db' },
    'dark': 'text-white pt-20 overflow-hidden w-2/3',
    'white': 'text-black pt-20 overflow-hidden w-2/3'
  }


  return (
    <div className={theme.theme == 'dark' ? styles.dark : styles.white} style={theme.theme == 'dark' ? styles.darkCol : styles.whiteCol} >
    <div className='flex justify-center'>

      <div className='flex justify-center py-5'>

        <h1 className={styles.bio} style={theme.theme == 'dark' ? styles.darkBioCol : styles.whiteBioCol}>
          {"Hello, I'm a web developer based in Bangladesh"}
        </h1>

      </div>

      <div className='flex justify-center'>
        <div className='mx-8 py-3'>

          <p className='text-4xl font-bold' style={{ 'fontFamily': 'monospace' }}>Tausur Rahaman</p>

          <p className='text-lg font-semibold py-1'>Solo developer (Designer/ Developer/ Data Analyzer)</p>

        </div>
      </div>

      {/* ProfileImage here */}
      <div className='flex justify-center py-5'>
        <img src="/profile.jpg" alt="" className='rounded-full w-32 border-2 border-white pointer-events-none' />
      </div>

      {/* works */}
      <div className='px-8 flex md:justify-center '>
        <div className='md:w-2/6'>
          <h1 className='text-2xl font-mono border-b-4 inline-block border-gray-500'>Works</h1>
          <div className='py-5'>
            <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ad sed excepturi ipsa accusantium corrupti eum omnis cum quae adipisci asperiores molestiae quas, praesentium enim quaerat, nulla iste velit porro vitae necessitatibus. Recusandae fuga consequuntur nemo incidunt non deserunt officiis similique, earum id tempora sapiente illum voluptate quibusdam maxime necessitatibus!</p>
          </div>
        </div>
      </div>

      {/* bio */}
      <div className='px-8'>
        <About />
      </div>

      {/* I love */}
      <div className='flex md:justify-center'>
        <div className='px-8 md:px-0 py-5 pb-10 md:w-1/3'>
          <div className='inline-flex items-center text-2xl font-mono border-b-4 border-gray-500'>
            <p className='pr-1'>I</p>
            <AiFillHeart />
          </div>
          <p className='py-2'>
            Machine Learning, Drawing, Travelling, Playing Cricket, Cycling, Music
          </p>
        </div>
      </div>

      {/* on the web */}
      <div className='flex md:justify-center pb-10'>
        <div className='md:w-1/3 px-8 md:px-0'>
          <h1 className='text-2xl font-mono inline-block border-b-4 border-gray-500'>On the web</h1>
          <div className='py-5 px-5'>

            {/* github */}
            <div className='flex items-center'>
              <BsGithub className='text-xl' />
              <button className='pl-3 text-lg text-teal-500 font-semibold '>
              <Link href='https://github.com/tausur'>@Tausur</Link>
              </button>
            </div>

            {/* Website */}
            <div className='py-2'>
              <div className='flex items-center'>
                <CgWebsite className='text-xl'/>
                <button className='pl-5 text-lg text-teal-500 font-semibold '>
                  <Link href={'https://tausur-rahaman.vercel.app'}>
                  Website
                  </Link>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
</div>
  )
}

export default HomePage
