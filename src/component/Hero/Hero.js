import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <div>
      
        <div className='categories'>
            <h3 className='categories_name'>
                Categories
            </h3>
                <div className='categories_in'>
                        <p className='in_house'>  House Plants</p>   
                        <p> Potter Plants</p>    
                        <p> Seeds</p>    
                        <p> Small Plants</p>    
                        <p> Big Plants</p>    
                        <p> Succulents</p>    
                        <p> Trerrariums</p>    
                        <p> Gardening</p>    
                        <p> Accessories</p> 
                        <div className='categories_number'>
                        <p className='number_33'>(33)</p>                    
                            <p>(12)</p>
                            <p>(65)</p>
                            <p>(39)</p>
                            <p>(23)</p>
                            <p>(17)</p>
                            <p>(19)</p>
                            <p>(13)</p>
                            <p>(18)</p>
                        </div>   
                </div>

                {/* Price Range */}

                <div className='price'>
                    <h4 className='price_range'>
                        Price Range
                    </h4>
                    <span className='dot_1'></span>
                    <span className='line_1'></span>
                    <span className='dot_2'></span>
                    <span className='line_2'></span>

                    <p className='price_39'>
                        Price: $39 - $1230
                    </p>
                </div>

        </div>
    </div>
  )
}

export default Hero
