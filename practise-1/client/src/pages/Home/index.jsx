import React from 'react'
import styles from './index.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
        <div className={styles.img}>
 <img src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg" alt="" />
        </div>
       
        <div className={styles.title}>
            <h1>Finding Your Perfect Shoes</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis veritatis enim esse? Lorem, ipsum dolor.</p>
            <button><a href="/shop">SHOP NOW</a></button>
        </div>
    </div>
  )
}

export default Home