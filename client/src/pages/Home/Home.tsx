import Footer from 'components/Footer'
import React from 'react'
import Header from '../../components/Header'
import Slider from './components/Slider'
import slides from './components/slides.json'

const Home = () => {
  return (
    <div className="">
      <Header />
      <Slider slides={slides} />
      <Footer />
    </div>
  )
}

export default Home
