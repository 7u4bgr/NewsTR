import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Data from '../../data.json'
import { getNews } from "../../api/getnews";
import { Link } from "react-router-dom";
import Wrapper from '../../components/UI'
const Home = () => {
  const [query,setQuery]=useState("general")
  const [data,setData]=useState(null)
useEffect(()=>{
  getNews(query).then((res)=>setData(res.data.result))
},[query])
  return (
    <>


  <div className={styles.background}>

      <div className={styles.text}>
      
          <h2>Ən Son Xəbərlər</h2>
        
      </div>
      <div className={styles.maps}>
        {data?.map((item)=>(
          <Link to={item.url} target="_blank" className={styles.flexs}>
            <div className={styles.images}>

            <img src={item.image} alt="" />
            </div>
            <div className={styles.tags}>
              <h3>{item.date}</h3>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
       
      </div>
  </div>



    </>
  );
};

export default Home;
