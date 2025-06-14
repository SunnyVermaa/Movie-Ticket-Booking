import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const navigate = useNavigate()
  return (
    <>
      <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'>

      <img src={assets.marvelLogo} alt="" className='max-h-11 lg:h-11 mt-20'/>

      <h1 className='text-5xl md:text-[70px] md-leading-18 font-semibold m-w-110'>Gaurdian <br />of the galaxy</h1>

      <div className='flex items-center gap-4 text-gray-300'>
        <span>Action | Adventure | Sci-Fi </span>
        <div className='flex items-center gap-1'><CalendarIcon className='w-4.5 h-4.5'/>2018</div>
        <div className='flex items-center gap-1'><ClockIcon className='w-4.5 h-4.5'/>2h 8m</div>
      </div>

      <p className='max-w-md text-gray-300'>This is movies and i am writing their discription but i dont have any discription so that i only write any things but you have to not worried about because this is only frontend</p>

      <button onClick={() => navigate('/movies')} className='group flex items-center mt-5 gap-2 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
        Explore more
        <ArrowRight className='w-5 h-5 group-hover:translate-x-0.5 transition'/>
      </button>

      </div>
    </>
  )
}

export default HeroSection
