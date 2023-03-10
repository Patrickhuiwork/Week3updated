import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'
import Hero from '../components/hero';;
import Slider from '../components/slider';
import { SliderData } from '../components/sliderdata';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log(data);
  const [information, setInformation] = useState([...data])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Week03' message='“Do the impossible and youll never doubt yourself ever again.”' />
        <Slider slides={SliderData} />
      <main className={styles.main}>




        <div className={styles.grid}>
          <div >Business Degress:</div>
          {
            information && information.map((info, index)=> {
              if(info.department.toLowerCase() === "business"){
              
              
              return(
                <Card  key={index} degree={information.degree} colour="red"/>
              )
              }
            })
          }
          <div>Computing Degress:</div>
          {
            information && information.map((info, index)=> {
              if(info.department.toLowerCase() === "computing"){
              
              
                return(
                  <Card key={index} degree={information.degree} colour="blue"/>
                )
              }
            })
          }

        </div>
      </main>
    </>
  )
}