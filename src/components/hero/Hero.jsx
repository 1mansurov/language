import React from 'react'
import hero_img from '../../img/hero.png'
import './Hero.css';


const Hero = () => {
    return (
        <div >
            <div  className='hero__wrapper'  >
                <div className='hero__content'>
                    <h2>Blog Posts</h2>
                    <h3>I think so, this is it. </h3>
                    <p>Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.</p>
                </div>
                <div className='hero__img'>
                    <img src={hero_img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
