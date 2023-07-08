import React from 'react'
import styles from "./Header.module.css";
import ressvg from "../../assets/res.svg";
const Header = () => {
  return (
    <div className={styles.container}>
    <div className={styles.left}>
        <p className={styles.heading}>
            Make your <span>Dream</span> Job
        </p>
        <p className={styles.heading}>
            a reality with our <span>Resume Builder</span>
        </p>
      </div>
      <div className={styles.right}>
       <img src={ressvg} alt=" pic"></img> 
      </div>
      </div>
  )
}

export default Header;
