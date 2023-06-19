import React from 'react'
import './Hero.css'
import super_foto  from '../../assets/super_foto.png'
import barberton from '../../assets/barberton.png';
import angelwing from '../../assets/angelwing.png';
import african from '../../assets/african.png';
import flower2 from '../../assets/flower2.png';
import blushing from '../../assets/blushing.png';
import aluminum from '../../assets/aluminum.png';
import birds from '../../assets/birds.png';
import broad from '../../assets/broad.png';
import chines from '../../assets/chines.png';



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
                        Price: <span>$39 - $1230</span>
                    </p>
                    <p className='filter'>
                        <span>Filter</span>
                    </p>

                    <div className='size'>
                        <h4 className='size_name'>
                            Size
                        </h4>
                        <div className='sizes'>
                            <p>Samll</p>
                            <p>Medium</p>
                            <p>Large</p>

                        </div>
                         
                        {/* SIZES */}

                        <div className='sizes_num'>
                            <p>(119)</p>
                            <p>(86)</p>
                            <p>(78)</p>
                        </div>
                    </div>

                    <div className='super_sale'>
                        <h4 className='super_name'>
                            Super Sale
                        </h4>
                        <p className='super_up'>
                                UP TO 75% OFF
                        </p>
                        <img src={african} alt='super_foto' className='super_foto' />
                    </div>
                </div>
                

        </div>

        <div className='sheets'>
            <h5 className='all_plant'>
                All Plants
                
            </h5>
            <h5 className='new_arr'>
                New Arrivals
            </h5>
            <h5 className='sheets_sale'>
                    Sale
            </h5>
        </div>

         {/* All Plants fotos */}

        <div>
            <img src={barberton} alt='barberton' className='barberton' />

                <p className='barberton_name'>Barberton Daisy</p>
                <span className='barberton_cost'>$119.00</span>

            <img src={angelwing} alt='angelwing' className='angelwing' />

                <p className='angelwing_name'>Angel Wing Begonia</p>
                <span className='angelwing_cost'>$169.00</span>


            <img src={african} alt='african' className='african' />

                <p className='african_name'>African Violet</p>
                <span className='african_cost'>$199.00</span>
                <span className='african_cost2'>$229.00</span>


            <img src={angelwing} alt='angelwing' className='angelwing1' />

                <p className='angelwing1_name'>Angel cio</p>
                <span className='angelwing1_cost'>$189.00</span>


            <img src={flower2} alt='flower2' className='flower2' />

                <p className='flower2_name'>Beach Spider Lily</p>
                <span className='flower2_cost'>$129.00  </span>
            

            <img src={blushing} alt='blushing' className='blushing' />

                <p className='blushing_name'>Blushing Bromeliad</p>
                <span className='blushing_cost'>$139.00</span>


            <img src={aluminum} alt='aluminum' className='aluminum' />

                <p className='aluminum_name'>Aluminum Plant</p>
                <span className='aluminum_cost'>$179.00</span>


            <img src={blushing} alt='blushing' className='blushing1' />

                <p className='blushing1_name'>Blushing Cio</p>
                <span className='blushing1_cost'>$255.10</span>


            <img src={birds} alt='birds' className='birds' />

                <p className='birds_name'>Bird's Nest Fern</p>
                <span className='birds_cost'>$99.00</span>


            <img src={broad} alt='broad' className='broad' />

                <p className='broad_name'>Broadleaf Lady Palm </p>
                <span className='broad_cost'>$59.00</span>


            <img src={chines} alt='chines' className='chines' />

                <p className='chines_name'>Chinese Evergreen</p>
                <span className='chines_cost'>$30.00</span>


            <img src={broad} alt='broad' className='broad1' />

                <p className='broad1_name'>Broadleaf Cio</p>
                <span className='broad1_cost'> $69.00 </span>


        </div>

        <div className='pagess'>
            <span className='pagess_1'>
                <p className='pagess_one'>1</p>
            </span>
            <span className='pagess_2'>
            <p className='pagess_two'>2</p>
            </span>
            <span className='pagess_3'>
            <p className='pagess_three'>3</p>
            </span>
            <span className='pagess_4'>
            <p className='pagess_four'>5</p>
            </span>
            <span className='pagess_5'>
            <p className='pagess_next'>next</p>
            </span>
        </div>

    </div>
  )
}

export default Hero
