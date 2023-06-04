import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'
import flower from "../../assets/flower.png"
const Header = () => {
  return (
        <div className='navbar'>
            <h1 className='green'>
              <img src={logo} alt='logo' className='logo'/>
                Greenshop
            </h1>
              <div className='pages'>
                <h4 className='home'>
                  Home 
                </h4>
                <h4 className='shop'>
                  Shop
                </h4>
                <h4 className='plant'>
                  Plant Care
                </h4>
                <h4 className='blogs'>
                  Blogs
                </h4>
                <div className='search'>
                  
                </div>


                {/* ////Welcome */}

                  <div className='welcome'>
                      <h3 className='wel'>
                         Welcome to GreenShop
                      </h3>
                    <h2 className='lets'>
                      Let’s Make a Better 
                      <span>Planet</span>
                    </h2>
                      <img src={flower} alt='flower' className='flower' />
                      <img src={flower} alt='flower' className='flower_small' />

                      <p className='wel_p'>
                         We are an online plant shop offering a wide range of cheap and trendy plants. 
                         Use our plants to create an unique Urban Jungle. Order your favorite plants!                      
                      </p>

                      <div className='shop_now'>
                         <p className='shop_now_in'>
                          Shop Now
                         </p>
                         <span className='ellipse_1'>.</span>
                         <span className='ellipse_2'>.</span>
                         <span className='ellipse_3'>.</span>
                      </div>
                  </div>


              </div>
              
        </div>
    
  )
}

export default Header
