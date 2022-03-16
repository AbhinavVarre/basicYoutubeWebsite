import React from 'react'
import Home from "./Home";
import Navigation from './Navigation';
import styles from './teststyle.module.css'

import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

export default function MyVideos() {
  return (
    <div>
      <Navigation/>
            <div  className={styles.center} style = {{ display: "flex", justifyContent: "center"}}>
              <div className={styles.content}>
                <Home/>
              </div>
            </div>
    </div>
  )
}
