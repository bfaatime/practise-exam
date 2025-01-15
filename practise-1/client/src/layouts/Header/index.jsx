import React from 'react'
import { NavLink } from "react-router"
import styles from './index.module.scss'
import { SlBasket } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";
import { MdPerson } from "react-icons/md";


const Header = () => {
  return (
    <header>
    <div className="container">
            <div className={styles.header}>
                <div className={styles.box}>
               <a href="/">SHOPPERS</a>
                </div>
            
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/add">Add</NavLink>
                        </li>
                        <li>
                            <NavLink to="/favorites">Favorites</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop">Shop</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={styles.right}>
                    <a href="/basket"><SlBasket /></a>
                    <a href="/favorites"><MdFavoriteBorder /></a>
                    <a href="/login"><MdPerson /></a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header