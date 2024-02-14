import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Waterfall from '../Assets/img-9.jpg'
import Bali from '../Assets/img-2.jpg'
import Sail from '../Assets/img-3.jpg'
import Football from '../Assets/img-4.jpg'
import Desert from '../Assets/img-8.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1 className='top-text'>Our Top Picks For You!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem src={Waterfall} text='Explore The Hidden Waterfall Deep Inside The Amazon' label='Adventure' path='/services' />
                <CardItem src={Bali} text='Traverse The Magical Islands Of Bali Via An Amazing Cruise' label='Luxury' path='/services' />
            </ul>
            <h1 className='bottom-text'>Other Destinations</h1>
            <ul className="cards__items">
                <CardItem src={Sail} text='Feed Your Inner Adventurer And Set Sail Across Uncharted Waters' label='Mystery' path='/services' />
                <CardItem src={Football} text='Experince Footbal With Breathtaking Views From The Top Of The Himilayan Mountains' label='Adventure' path='/services' />
                <CardItem src={Desert} text='Embark On An Unforgettable Journey Across The Sahara Desert With Our Expertly Guided Camel Tour Experience.' label='Adventure' path='/services' />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
