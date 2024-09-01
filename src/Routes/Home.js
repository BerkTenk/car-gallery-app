import React from 'react'
import NavBar from '../components/NavBar'
import CarouselComponent from '../components/CarouselComponent'
import HeroImg from "../components/HeroImg"
import ScrollableGallery from '../components/ScrollableGallery'
function Home() {
  return (
    <div>
        <NavBar />
        <HeroImg />
        <CarouselComponent />
        <ScrollableGallery />
    </div>
  )
}

export default Home