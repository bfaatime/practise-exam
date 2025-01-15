import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BASE_URL } from '../../constants';

const Shop = () => {

  const getProduct = async() => {

const [products, setProducts] = useState([])

    try {
      const response  = await axios.get(`${BASE_URL}`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getProduct()
  }, [])
  return (
    <div className={styles.searchs}>
<p> <input type="text" placeholder='Search'  /> <a href="#"><HiMagnifyingGlass /></a> </p>
<select id="latest" className={styles.latest}> 
<option value="0">Latest</option>
  <option value="men">men</option>
  <option value="women">women</option>
  <option value="children">children</option>
</select>
<select id="latest" className={styles.reference}> 
<option value="0">Reference</option>
  <option value="1">A to Z</option>
  <option value="2">Z to A</option>
</select>
    </div>
  )
}

export default Shop