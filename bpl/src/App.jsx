
import { Suspense } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Player from './components/Player/Player'

const fetchplayer = async() =>{
  const res = await fetch('/Data.json')
  return res.json()
}

function App() {
  const playerpromise= fetchplayer();
  return (
    <>
       <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
         <Player playerpromise={playerpromise}></Player>
      </Suspense>
     
    </>
  )
}

export default App
