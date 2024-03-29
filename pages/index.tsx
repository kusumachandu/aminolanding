import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import AminoLanding from './landing page/AminoLanding'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='py-2'>
        <AminoLanding />
      </div>
    </>
  )
}
