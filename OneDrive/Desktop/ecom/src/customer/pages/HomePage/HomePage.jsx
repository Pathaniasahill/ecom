import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { men_kurta } from '../../../Data/men_kurta'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
     < MainCarousel/>

     <div className='py-20 space-y-3 flex flex-col justify-center'>
        <HomeSectionCarousel data={men_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={men_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={men_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarousel data={men_kurta} sectionName={"Women's Saree"}/>
        <HomeSectionCarousel data={men_kurta} sectionName={"Women's Dress"}/>
     </div>

     
    </div>
  )
}

export default HomePage
