import React from 'react'
import HeroSection from "../HeroSection";
import Cards from '../Cards';
import { Slider } from '../slider'
import slides from '../mock.json'

function Home() {
    return(
        <div>
            <HeroSection />
            <Cards />
            <Slider slides={slides}/>
        </div>
    )
}

export default Home;