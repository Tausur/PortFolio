import '../styles/globals.css'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import mongoose from 'mongoose'
import ErrorBoundary from '../components/ErrorBoundary'

function MyApp({ Component, pageProps }) {

  const [mode, setMode] = useState('dark')

  const getData = (data) => {
    setMode(data)
  }

  return <>
    <div className='fixed w-full backdrop-blur'>
      <Navbar onSubmit={getData} />
    </div>
    <ErrorBoundary>
    <Component {...pageProps} theme={mode} />
    </ErrorBoundary>
    
    <Footer theme={mode} />
  </>
}

export default MyApp
