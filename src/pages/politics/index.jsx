import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Data from '../../data.json'
import { getNews } from "../../api/getnews";
import { Link } from "react-router-dom";
const Politics = () => {
  const [query,setQuery]=useState("politics")
  const [data,setData]=useState(null)
useEffect(()=>{
  getNews(query).then((res)=>setData(res.data.result))
},[query])
  return (
    <>

      <div className={styles.text}>
        <div className={styles.text1}>
          <h2>Ən Son Xəbərlər</h2>
        </div>
      </div>
      <div className={styles.maps}>
        {data?.map((item)=>(
          <Link to={item.url} target="_blank" className={styles.flexs}>
            <div className={styles.images}>

            <img src={item.image} alt="" />
            </div>
            <div className={styles.tags}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <h3>{item.date}</h3>
            </div>
          </Link>
        ))}
       
      </div>
    </>
  );
};

export default Politics;
