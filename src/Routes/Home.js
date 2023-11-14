import React from 'react'
import NavBar from '../components/NavBar'
import CarouselComponent from '../components/CarouselComponent'
import HeroImg from "../components/HeroImg"
function Home() {
  return (
    <div>
        <NavBar />
        <HeroImg />
        <CarouselComponent />
    </div>
  )
}

export default Home