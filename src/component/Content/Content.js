import React from 'react'
import './Content.css'
import blushing from '../../assets/blushing.png'
import african from '../../assets/african.png'



const Content = () => {
  return (
    <div>
      <div className='one_flow'>

        <img src={blushing} alt='content_flow'  className='flow'/>

        <h4 className='summer'>
            SUMMER CACTUS & SUCCELENTS
        </h4>
        <p className='summer_p'>
            We are an online plant shop offering a wide  range of cheap and trendy plants
        </p>

        <p className='find_more'>
            <span>
            Find More --
            </span>
        </p>
      </div>

      <div className='two_flow'>

      <img src={african} alt='content_flow2'  className='flow2'/>
      <h4 className='styling'>
            STYLING TRENDS & MUCH MORE
        </h4>
        <p className='styling_p'>
            We are an online plant shop offering a wide  range of cheap and trendy plants
        </p>

        <p className='find_more2'>
            <span>
            Find More --
            </span>
        </p>

      </div>
    </div>
  )
}

export default Content
